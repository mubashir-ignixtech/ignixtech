import { AttendanceCard } from '@/components/attendance/attendance-card'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default async function AttendancePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: logs } = await supabase
    .from('attendance')
    .select('*')
    .eq('user_id', user?.id)
    .order('check_in', { ascending: false })
    .limit(10)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">Track your work hours and view history.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AttendanceCard />
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs?.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">
                        {format(new Date(log.check_in), 'MMM dd, yyyy')}
                      </TableCell>
                      <TableCell>{format(new Date(log.check_in), 'HH:mm')}</TableCell>
                      <TableCell>
                        {log.check_out ? format(new Date(log.check_out), 'HH:mm') : '--:--'}
                      </TableCell>
                      <TableCell>
                        {log.check_out 
                          ? `${Math.round((new Date(log.check_out).getTime() - new Date(log.check_in).getTime()) / (1000 * 60 * 60) * 10) / 10} hrs`
                          : 'In Progress'}
                      </TableCell>
                    </TableRow>
                  ))}
                  {(!logs || logs.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        No logs found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
