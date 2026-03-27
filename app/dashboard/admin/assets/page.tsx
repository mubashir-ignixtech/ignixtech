import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Box, Hash, User, Calendar, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { RegisterAssetDialog } from '@/components/admin/register-asset-dialog'
import { AssignAssetDialog } from '@/components/admin/assign-asset-dialog'
import { AssetHistoryDialog } from '@/components/admin/asset-history-dialog'
import { ReturnAssetDialog } from '@/components/admin/return-asset-dialog'

export default async function AdminAssetsPage() {
  const supabase = await createClient()

  const { data: assets } = await supabase
    .from('assets')
    .select('*, asset_assignments(*, profiles(*))')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Asset Inventory</h1>
          <p className="text-muted-foreground">Manage and track company equipment and assets.</p>
        </div>
        <RegisterAssetDialog />
      </div>

      <div className="grid gap-6">
        {assets?.map((asset) => {
          const activeAssignment = asset.asset_assignments?.find((a: any) => !a.returned_at)
          
          return (
            <Card key={asset.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Box className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <Badge variant={asset.status === 'available' ? 'outline' : 'default'} className="capitalize">
                      {asset.status}
                    </Badge>
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      {asset.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-1">{asset.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4 font-mono">
                    <Hash className="h-3 w-3" />
                    {asset.serial_number}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Registered {format(new Date(asset.created_at), 'MMM dd, yyyy')}
                    </div>
                    {activeAssignment && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                        <User className="h-4 w-4" />
                        Currently with {activeAssignment.profiles?.full_name}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t md:border-t-0 md:border-l bg-muted/10 p-6 flex flex-col justify-center gap-3 md:w-56">
                  {asset.status === 'available' ? (
                    <AssignAssetDialog assetId={asset.id} assetName={asset.name} />
                  ) : (
                    <ReturnAssetDialog 
                      assetId={asset.id} 
                      assetName={asset.name} 
                      assignmentId={activeAssignment?.id} 
                    />
                  )}
                  <AssetHistoryDialog assetId={asset.id} assetName={asset.name} />
                </div>
              </div>
            </Card>
          )
        })}
        {(!assets || assets.length === 0) && (
          <Card className="py-20 text-center space-y-4">
            <CardContent>
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Box className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Empty Inventory</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                No company assets have been registered yet. Start adding equipment to your inventory.
              </p>
              <Button className="mt-4">Register First Asset</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
