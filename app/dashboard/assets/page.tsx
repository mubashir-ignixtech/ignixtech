import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Box, Calendar, Hash, Tag } from 'lucide-react'
import { format } from 'date-fns'

export default async function MyAssetsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: assignments } = await supabase
    .from('asset_assignments')
    .select('*, assets(*)')
    .eq('user_id', user?.id)
    .is('returned_at', null)

  const assets = assignments?.map(a => ({
    ...a.assets,
    assigned_at: a.assigned_at
  })).filter(Boolean) || []

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Assets</h1>
        <p className="text-muted-foreground">Company items and assets currently in your possession.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset: any) => (
          <Card key={asset.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Box className="h-5 w-5 text-secondary-foreground" />
                </div>
                <Badge variant="outline" className="capitalize">
                  {asset.type}
                </Badge>
              </div>
              <CardTitle className="mt-4">{asset.name}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-1 mt-1">
                  <Hash className="h-3 w-3" />
                  <span>{asset.serial_number}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Assigned on {format(new Date(asset.assigned_at), 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center text-sm">
                  <Tag className="mr-2 h-4 w-4 text-primary" />
                  <span className="font-medium">Status: In Use</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {assets.length === 0 && (
          <Card className="col-span-full py-12">
            <CardContent className="flex flex-col items-center justify-center text-center space-y-2">
              <Box className="h-12 w-12 text-muted-foreground/20" />
              <div className="text-lg font-medium">No assets assigned</div>
              <p className="text-sm text-muted-foreground">
                You don&apos;t have any company assets currently assigned to you.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
