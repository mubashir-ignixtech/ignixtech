'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { 
  LayoutDashboard, 
  Clock, 
  FileText, 
  Briefcase, 
  Box, 
  Settings, 
  LogOut,
  Users,
  ShieldCheck
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Sidebar({ user, profile }: { user: any, profile: any }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const isAdmin = profile?.role === 'admin'

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Attendance', href: '/dashboard/attendance', icon: Clock },
    { name: 'Daily Reports', href: '/dashboard/reports', icon: FileText },
    { name: 'My Projects', href: '/dashboard/projects', icon: Briefcase },
    { name: 'My Assets', href: '/dashboard/assets', icon: Box },
  ]

  const adminNavigation = [
    { name: 'Attendance Monitor', href: '/dashboard/admin/teams', icon: Users },
    { name: 'Progress Reports', href: '/dashboard/admin/reports', icon: FileText },
    { name: 'Manage Projects', href: '/dashboard/admin/projects', icon: Briefcase },
    { name: 'Asset Inventory', href: '/dashboard/admin/assets', icon: Box },
  ]

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-xl font-bold text-primary">Ignixtech</span>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === item.href 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>

        {isAdmin && (
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Admin Console
            </h3>
            <div className="mt-2 space-y-1">
              {adminNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    pathname === item.href 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 px-3 py-2 mb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile?.avatar_url} />
            <AvatarFallback>{profile?.full_name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-medium">{profile?.full_name || 'User'}</span>
            <span className="truncate text-xs text-muted-foreground">{user?.email}</span>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3 border-destructive/20 text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
