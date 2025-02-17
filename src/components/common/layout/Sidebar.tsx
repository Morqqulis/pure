'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AdminLogo } from '../icons/icons'
import { SIDEBAR_ITEMS } from './Sidebar/sidebar.data'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col bg-card border-r w-72 h-screen">
      <div className="flex items-center px-6 py-8 border-b h-18">
        <Link className="flex items-center gap-2" href="/">
          <AdminLogo className="w-auto h-10" />
          <span className="sr-only">Radio Copilot Admin</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
              pathname === item.href
                ? 'bg-secondary text-secondary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground',
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
