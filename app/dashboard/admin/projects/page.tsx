import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Briefcase, Users, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { CreateProjectDialog } from '@/components/admin/create-project-dialog'
import { AssignProjectDialog } from '@/components/admin/assign-project-dialog'
import { EditProjectDialog } from '@/components/admin/edit-project-dialog'

export default async function AdminProjectsPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*, project_assignments(count)')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
          <p className="text-muted-foreground">Oversee all company projects and team assignments.</p>
        </div>
        <CreateProjectDialog />
      </div>

      <div className="grid gap-6">
        {projects?.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description || 'No description provided.'}
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Created {format(new Date(project.created_at), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {project.project_assignments?.[0]?.count || 0} Members assigned
                  </div>
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l bg-muted/10 p-6 flex flex-col justify-center gap-3 md:w-48">
                <EditProjectDialog project={project} />
                <AssignProjectDialog projectId={project.id} projectName={project.name} />
              </div>
            </div>
          </Card>
        ))}
        {(!projects || projects.length === 0) && (
          <Card className="py-20 text-center space-y-4">
            <CardContent>
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No Projects Yet</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Get started by creating your first company project and assigning team members.
              </p>
              <Button className="mt-4">Create Project</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
