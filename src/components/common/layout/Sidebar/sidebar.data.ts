import {
  AdjustmentsHorizontalIcon,
  Cog6ToothIcon,
  HomeIcon,
  MapPinIcon,
  MicrophoneIcon,
  SignalIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { SidebarItemProps } from './sidebar.types'

export const SIDEBAR_ITEMS: SidebarItemProps[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: HomeIcon,
  },
  {
    title: 'Clients',
    href: '/clients',
    icon: UsersIcon,
  },
  {
    title: 'Radio Stations',
    href: '/stations',
    icon: SignalIcon,
  },
  {
    title: 'Format Customizer',
    href: '/format',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: 'Locations',
    href: '/locations',
    icon: MapPinIcon,
  },
  {
    title: 'AI Voices',
    href: '/voices',
    icon: MicrophoneIcon,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Cog6ToothIcon,
  },
]
