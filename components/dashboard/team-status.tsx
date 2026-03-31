'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Loader2 } from 'lucide-react'

export function TeamStatus() {
  const [activeUsers, setActiveUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchActiveUsers()
    
    // Set up real-time subscription for attendance table
    const channel = supabase
      .channel('attendance_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'attendance' }, () => {
        fetchActiveUsers()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchActiveUsers = async () => {
    const { data } = await supabase
      .from('attendance')
      .select('*, profiles(*)')
      .is('check_out', null)

    if (data) {
      setActiveUsers(data)
    }
    setLoading(false)
  }

  if (loading) return <Loader2 className="h-4 w-4 animate-spin mx-auto my-8" />

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Team Online</CardTitle>
        <Users className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {activeUsers.map((log) => (
            <div key={log.id} className="relative group">
              <Avatar className="h-8 w-8 border-2 border-green-500/50">
                <AvatarImage src={log.profiles?.avatar_url} />
                <AvatarFallback>{log.profiles?.full_name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-green-500 border-2 border-background rounded-full" />
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
                <div className="bg-popover text-popover-foreground text-[10px] px-2 py-1 rounded shadow-lg border whitespace-nowrap">
                  {log.profiles?.full_name}
                </div>
              </div>
            </div>
          ))}
          {activeUsers.length === 0 && (
            <span className="text-xs text-muted-foreground italic">No one online</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
