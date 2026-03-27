import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format } from 'date-fns'
import { Clock, UserCheck, UserMinus } from 'lucide-react'

export default async function TeamMonitorPage() {
  const supabase = await createClient()

  // Get all active check-ins (check_out is null)
  const { data: activeAttendance } = await supabase
    .from('attendance')
    .select('*, profiles(*)')
    .is('check_out', null)

  // Get all recent logs
  const { data: recentLogs } = await supabase
    .from('attendance')
    .select('*, profiles(*)')
    .order('check_in', { ascending: false })
    .limit(20)

  // Get all profiles to see who is NOT checked in
  const { data: allProfiles } = await supabase
    .from('profiles')
    .select('*')

  const checkedInIds = new Set(activeAttendance?.map(a => a.user_id) || [])
  const idleEmployees = allProfiles?.filter(p => !checkedInIds.has(p.id)) || []

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Monitor</h1>
          <p className="text-muted-foreground">Real-time status of all employees.</p>
        </div>
        <div className="flex gap-4">
          <Badge variant="outline" className="h-10 px-4 text-green-600 bg-green-50 border-green-200 gap-2">
            <UserCheck className="h-4 w-4" />
            {activeAttendance?.length || 0} Online
          </Badge>
          <Badge variant="outline" className="h-10 px-4 text-muted-foreground bg-muted/20 gap-2">
            <UserMinus className="h-4 w-4" />
            {idleEmployees.length} Offline
          </Badge>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Currently Checked In</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeAttendance?.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg bg-card">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-green-500/20">
                      <AvatarImage src={log.profiles?.avatar_url} />
                      <AvatarFallback>{log.profiles?.full_name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{log.profiles?.full_name}</div>
                      <div className="text-xs text-muted-foreground">{log.profiles?.email}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium uppercase tracking-wider text-green-600">Active</div>
                    <div className="text-xs text-muted-foreground">Since {format(new Date(log.check_in), 'HH:mm')}</div>
                  </div>
                </div>
              ))}
              {(!activeAttendance || activeAttendance.length === 0) && (
                <div className="text-center py-12 text-muted-foreground italic">
                  No one is currently checked in.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Offline / Not Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {idleEmployees.map((profile) => (
                <div key={profile.id} className="flex items-center gap-3 p-3 border rounded-lg bg-muted/30 opacity-70">
                   <Avatar className="h-8 w-8 grayscale">
                      <AvatarImage src={profile.avatar_url} />
                      <AvatarFallback>{profile.full_name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="overflow-hidden">
                      <div className="font-medium text-xs truncate">{profile.full_name}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{profile.email}</div>
                    </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Log</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentLogs?.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <Avatar className="h-6 w-6">
                        <AvatarImage src={log.profiles?.avatar_url} />
                        <AvatarFallback>{log.profiles?.full_name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{log.profiles?.full_name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {format(new Date(log.check_in), 'MMM dd, yyyy')}
                  </TableCell>
                  <TableCell className="text-sm">
                    {format(new Date(log.check_in), 'HH:mm')} - {log.check_out ? format(new Date(log.check_out), 'HH:mm') : 'Active'}
                  </TableCell>
                  <TableCell>
                    {log.check_out ? (
                      <Badge variant="secondary">Completed</Badge>
                    ) : (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Live</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
