'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { UserPlus, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function AssignProjectDialog({ projectId, projectName }: { projectId: string, projectName: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [employees, setEmployees] = useState<any[]>([])
  const [selectedEmployee, setSelectedEmployee] = useState<string>('')
  const [fetching, setFetching] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    if (open) {
      fetchEmployees()
    }
  }, [open])

  const fetchEmployees = async () => {
    setFetching(true)
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'employee')

    if (data) {
      setEmployees(data)
    }
    setFetching(false)
  }

  const handleAssign = async () => {
    if (!selectedEmployee) return
    setLoading(true)

    const { error } = await supabase
      .from('project_assignments')
      .insert([{ 
        project_id: projectId, 
        user_id: selectedEmployee 
      }])

    if (error) {
      if (error.code === '23505') {
        toast.error('Employee is already assigned to this project')
      } else {
        toast.error(error.message)
      }
    } else {
      toast.success('Employee assigned successfully')
      setOpen(false)
      setSelectedEmployee('')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full gap-2">
          <UserPlus className="h-4 w-4" />
          Assign Team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Team Member</DialogTitle>
          <DialogDescription>
            Add an employee to the project: **{projectName}**
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="employee">Select Employee</Label>
            <Select value={selectedEmployee} onValueChange={setSelectedEmployee} disabled={fetching}>
              <SelectTrigger id="employee">
                <SelectValue placeholder={fetching ? "Loading..." : "Choose an employee"} />
              </SelectTrigger>
              <SelectContent>
                {employees.map((emp) => (
                  <SelectItem key={emp.id} value={emp.id}>{emp.full_name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAssign} disabled={loading || !selectedEmployee}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Confirm Assignment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
