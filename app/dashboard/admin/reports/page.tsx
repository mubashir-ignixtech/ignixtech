import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format } from 'date-fns'
import { FileText, Calendar, Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ReportFilters } from '@/components/admin/report-filters'

export default async function AdminReportsPage({ searchParams }: { searchParams: { userId?: string } }) {
  const supabase = await createClient()

  // Fetch all employees for the filter dropdown
  const { data: employees } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'employee')

  // Build query
  let query = supabase
    .from('progress_reports')
    .select('*, profiles(*), projects(name)')
    .order('created_at', { ascending: false })

  if (searchParams.userId) {
    query = query.eq('user_id', searchParams.userId)
  }

  const { data: reports } = await query

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daily Progress Reports</h1>
          <p className="text-muted-foreground">Review accomplishments and blockers from across the team.</p>
        </div>
        <ReportFilters employees={employees || []} />
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Progress Report</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports?.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={report.profiles?.avatar_url} />
                        <AvatarFallback>{report.profiles?.full_name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{report.profiles?.full_name}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{report.profiles?.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {report.projects?.name ? (
                      <Badge variant="secondary" className="whitespace-nowrap">{report.projects.name}</Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">General</span>
                    )}
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    {format(new Date(report.created_at), 'MMM dd, yyyy')}
                  </TableCell>
                  <TableCell>
                    <div className="max-w-md text-sm text-balance line-clamp-2 hover:line-clamp-none cursor-help transition-all duration-300">
                      {report.content}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {(!reports || reports.length === 0) && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-20 text-muted-foreground italic">
                    <div className="flex flex-col items-center gap-2">
                       <FileText className="h-10 w-10 opacity-20" />
                       No reports submitted yet.
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
