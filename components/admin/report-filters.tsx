'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function ReportFilters({ employees }: { employees: any[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentUserId = searchParams.get('userId') || 'all'

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete('userId')
    } else {
      params.set('userId', value)
    }
    router.push(`/dashboard/admin/reports?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push('/dashboard/admin/reports')
  }

  return (
    <div className="flex items-center gap-4">
      <div className="w-64">
        <Select value={currentUserId} onValueChange={handleFilter}>
          <SelectTrigger>
            <SelectValue placeholder="All Employees" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Employees</SelectItem>
            {employees.map((emp) => (
              <SelectItem key={emp.id} value={emp.id}>{emp.full_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {currentUserId !== 'all' && (
        <Button variant="ghost" size="icon" onClick={clearFilters} title="Clear filter">
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
