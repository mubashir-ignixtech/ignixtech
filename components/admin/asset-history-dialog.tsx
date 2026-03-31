'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { History, Loader2, Calendar, User } from 'lucide-react'
import { format } from 'date-fns'

export function AssetHistoryDialog({ assetId, assetName }: { assetId: string, assetName: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    if (open) {
      fetchHistory()
    }
  }, [open])

  const fetchHistory = async () => {
    setLoading(true)
    const { data } = await supabase
      .from('asset_assignments')
      .select('*, profiles(full_name, email)')
      .eq('asset_id', assetId)
      .order('assigned_at', { ascending: false })

    if (data) {
      setHistory(data)
    }
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <History className="h-4 w-4" />
          Service History
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Asset History</DialogTitle>
          <DialogDescription>
            Assignment logs for **{assetName}**
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
          {loading ? (
             <div className="flex justify-center p-8">
               <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
             </div>
          ) : history.length > 0 ? (
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="p-3 border rounded-lg bg-muted/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      {item.profiles?.full_name}
                    </div>
                    {item.returned_at ? (
                      <span className="text-muted-foreground italic">Returned</span>
                    ) : (
                      <span className="text-green-600 font-bold uppercase tracking-tighter">Current</span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      From: {format(new Date(item.assigned_at), 'PPP')}
                    </div>
                    {item.returned_at && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        To: {format(new Date(item.returned_at), 'PPP')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground italic">
              No assignment history found for this asset.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
