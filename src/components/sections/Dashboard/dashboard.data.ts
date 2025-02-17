import { MicrophoneIcon, RadioIcon, UsersIcon } from '@heroicons/react/24/outline'

export const mockLocations = [
  {
    id: 1,
    name: 'New York',
    country: 'US',
    city: 'New York',
    timezone: 'America/New_York',
  },
  {
    id: 2,
    name: 'London',
    country: 'GB',
    city: 'London',
    timezone: 'Europe/London',
  },
]

export const mockStations = [
  {
    id: 1,
    stationId: 'sh5622d9',
    name: 'Radio NYC',
    locationId: 1,
    omniplayerUrl: 'https://nyc.omniplayer.com',

    clientId: 'nyc_client',
    clientSecret: 'nyc_secret',
    username: 'nyc_user',
    password: 'nyc_pass',
    language: 'en',
    website: 'www.radionyc.com',
    status: 'active',
    createdAt: new Date(),
    prompts: [],
    systemPrompt: 'You are a radio host for Radio NYC...',
  },
  {
    id: 2,
    stationId: '12',
    name: 'London FM',
    locationId: 2,
    omniplayerUrl: 'https://london.omniplayer.com',
    clientId: 'london_client',
    clientSecret: 'london_secret',

    username: 'london_user',
    password: 'london_pass',
    language: 'en',
    website: 'www.londonfm.co.uk',
    status: 'active',
    createdAt: new Date(),
    prompts: [],
    systemPrompt: 'You are a radio host for London FM...',
  },
]

export const mockVoices = [
  {
    id: '1',
    voiceId: 'pQB83Phx1CmQQkTQxu6o',
    name: 'John Smith',
    gender: 'male',
    language: 'English',
    accent: 'American',
    country: 'US',
    category: 'voicetracking',
    samples: [],
    status: 'active',
    createdAt: new Date(),
  },
  {
    id: '2',
    voiceId: 'kLM92Nhy5DpRRvSWxn7p',
    name: 'Emma Wilson',
    gender: 'female',
    language: 'English',
    accent: 'British',
    country: 'GB',
    category: 'news',
    samples: [],
    status: 'active',
    createdAt: new Date(),
  },
]

export const mockClients = [
  {
    id: 1,
    name: 'John Media Group',
    email: 'contact@johnmedia.com',
    company: 'John Media Holdings',
    status: 'active',
    stationIds: [1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'London Broadcasting',
    email: 'info@londonbroadcasting.co.uk',
    company: 'London Broadcasting Ltd',
    status: 'active',
    stationIds: [2],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const COLORS = ['#dc2626', '#059669', '#2563eb', '#d97706'] // red, emerald, blue, amber

export const mockUsageData = [
  { name: 'Mon', broadcasts: 240 },
  { name: 'Tue', broadcasts: 300 },
  { name: 'Wed', broadcasts: 280 },
  { name: 'Thu', broadcasts: 320 },
  { name: 'Fri', broadcasts: 290 },
  { name: 'Sat', broadcasts: 220 },
  { name: 'Sun', broadcasts: 200 },
]

export const mockVoiceUsage = [
  { name: 'News', value: 400 },
  { name: 'Weather', value: 300 },
  { name: 'Traffic', value: 200 },
  { name: 'Other', value: 100 },
]

const activeStations = mockStations.filter((s) => s.status === 'active').length
const activeVoices = mockVoices.filter((v) => v.status === 'active').length
const activeClients = mockClients.filter((c) => c.status === 'active').length

export const dashboardStats = [
  {
    name: 'Total Stations',
    value: activeStations,
    total: mockStations.length,
    icon: RadioIcon,
    color: 'bg-red-800',
  },
  {
    name: 'Active Voices',
    value: activeVoices,
    total: mockVoices.length,
    icon: MicrophoneIcon,
    color: 'bg-red-700',
  },
  {
    name: 'Active Clients',
    value: activeClients,
    total: mockClients.length,
    icon: UsersIcon,
    color: 'bg-red-600',
  },
]
