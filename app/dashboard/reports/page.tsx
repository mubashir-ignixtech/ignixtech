import { ProgressReportForm } from '@/components/reports/progress-report-form'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

export default async function ReportsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: reports } = await supabase
    .from('progress_reports')
    .select('*, projects(name)')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Progress Reports</h1>
        <p className="text-muted-foreground">Keep your team updated on your daily work.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ProgressReportForm />
        </div>
        
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reports?.map((report) => (
                  <div key={report.id} className="border-l-2 border-primary/20 pl-4 py-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold">
                        {format(new Date(report.created_at), 'MMM dd, yyyy')}
                      </span>
                      {report.projects?.name && (
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full font-medium">
                          {report.projects.name}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {report.content}
                    </p>
                  </div>
                ))}
                {(!reports || reports.length === 0) && (
                  <div className="text-center py-12 text-muted-foreground">
                    No reports submitted yet.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
