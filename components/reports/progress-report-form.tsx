'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { FileText, Loader2 } from 'lucide-react'

export function ProgressReportForm() {
  const [projects, setProjects] = useState<any[]>([])
  const [selectedProject, setSelectedProject] = useState<string>('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from('project_assignments')
      .select('projects(*)')
      .eq('user_id', user.id)

    if (data) {
      setProjects(data.map((d: any) => d.projects).filter(Boolean))
    }
    setFetching(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('progress_reports')
      .insert([
        { 
          user_id: user?.id,
          project_id: selectedProject || null,
          content: content
        }
      ])

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Report submitted successfully')
      setContent('')
      setSelectedProject('')
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle>Daily Progress Report</CardTitle>
        </div>
        <CardDescription>Document what you accomplished today.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="project">Project (Optional)</Label>
            <Select 
              value={selectedProject} 
              onValueChange={setSelectedProject}
              disabled={fetching}
            >
              <SelectTrigger id="project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((p) => (
                  <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Progress Details</Label>
            <Textarea
              id="content"
              placeholder="Describe your tasks, accomplishments, and any blockers..."
              className="min-h-[150px] resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Daily Report
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
