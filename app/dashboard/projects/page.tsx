import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'
import { format } from 'date-fns'

export default async function MyProjectsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: assignments } = await supabase
    .from('project_assignments')
    .select('*, projects(*)')
    .eq('user_id', user?.id)

  const projects = assignments?.map(a => a.projects).filter(Boolean) || []

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">Projects currently assigned to you.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <CardTitle className="mt-4">{project.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description || 'No description provided.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                Created {format(new Date(project.created_at), 'MMM dd, yyyy')}
              </div>
            </CardContent>
          </Card>
        ))}
        {projects.length === 0 && (
          <Card className="col-span-full py-12">
            <CardContent className="flex flex-col items-center justify-center text-center space-y-2">
              <Briefcase className="h-12 w-12 text-muted-foreground/20" />
              <div className="text-lg font-medium">No projects assigned</div>
              <p className="text-sm text-muted-foreground">
                You haven&apos;t been assigned to any projects yet. Contact your admin.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
