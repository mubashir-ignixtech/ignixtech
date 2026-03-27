'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Clock, Play, Square, Loader2 } from 'lucide-react'
import { format } from 'date-fns'

export function AttendanceCard() {
  const [loading, setLoading] = useState(true)
  const [activeAttendance, setActiveAttendance] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const supabase = createClient()

  useEffect(() => {
    fetchStatus()
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const fetchStatus = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('attendance')
      .select('*')
      .eq('user_id', user.id)
      .is('check_out', null)
      .maybeSingle()

    if (error) {
      console.error(error)
    } else {
      setActiveAttendance(data)
    }
    setLoading(false)
  }

  const handleCheckIn = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    
    const { data, error } = await supabase
      .from('attendance')
      .insert([{ user_id: user?.id }])
      .select()
      .single()

    if (error) {
      toast.error(error.message)
    } else {
      setActiveAttendance(data)
      toast.success('Successfully checked in')
    }
    setLoading(false)
  }

  const handleCheckOut = async () => {
    setLoading(true)
    const { error } = await supabase
      .from('attendance')
      .update({ check_out: new Date().toISOString() })
      .eq('id', activeAttendance.id)

    if (error) {
      toast.error(error.message)
    } else {
      setActiveAttendance(null)
      toast.success('Successfully checked out')
    }
    setLoading(false)
  }

  if (loading && !activeAttendance) {
    return (
      <Card>
        <CardContent className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 p-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Time Tracking</CardTitle>
            <CardDescription>{format(currentTime, 'EEEE, MMMM do')}</CardDescription>
          </div>
          <Clock className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-4xl font-mono font-bold tracking-tighter">
            {format(currentTime, 'HH:mm:ss')}
          </div>
          
          {activeAttendance ? (
            <div className="w-full space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                Working since: {format(new Date(activeAttendance.check_in), 'HH:mm')}
              </div>
              <Button 
                variant="destructive" 
                className="w-full h-12 text-lg font-semibold shadow-lg shadow-destructive/20 transition-all hover:scale-[1.02]"
                onClick={handleCheckOut}
                disabled={loading}
              >
                <Square className="mr-2 h-5 w-5 fill-current" />
                Check Out
              </Button>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="text-center text-sm text-muted-foreground italic">
                You are currently clocked out.
              </div>
              <Button 
                className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                onClick={handleCheckIn}
                disabled={loading}
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Check In
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
