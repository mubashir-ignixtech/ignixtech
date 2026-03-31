'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { RotateCcw, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function ReturnAssetDialog({ assetId, assetName, assignmentId }: { assetId: string, assetName: string, assignmentId: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleReturn = async () => {
    setLoading(true)

    // 1. Update the assignment record with returned_at
    const { error: assignError } = await supabase
      .from('asset_assignments')
      .update({ returned_at: new Date().toISOString() })
      .eq('id', assignmentId)

    if (assignError) {
      toast.error(assignError.message)
      setLoading(false)
      return
    }

    // 2. Update asset status to 'available'
    const { error: updateError } = await supabase
      .from('assets')
      .update({ status: 'available' })
      .eq('id', assetId)

    if (updateError) {
      toast.error(updateError.message)
    } else {
      toast.success('Asset marked as returned')
      setOpen(false)
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <RotateCcw className="h-4 w-4" />
          Mark as Returned
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Return Asset</DialogTitle>
          <DialogDescription>
            Are you sure you want to mark **{assetName}** as returned? 
            This will make it available for reassignment.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="default" onClick={handleReturn} disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirm Return
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
