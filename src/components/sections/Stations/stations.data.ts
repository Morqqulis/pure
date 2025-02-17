import { StationFormFieldProps, StationFormSchema } from './stations.types'

export const promptsFormFields: StationFormFieldProps[] = [
  {
    name: 'systemPrompt',
    label: 'System Prompt',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt0',
    label: 'Hourly Prompt 0',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt10',
    label: 'Hourly Prompt 10',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt20',
    label: 'Hourly Prompt 20',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt30',
    label: 'Hourly Prompt 30',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt40',
    label: 'Hourly Prompt 40',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt50',
    label: 'Hourly Prompt 50',
    type: 'text',
    required: false,
  },
  {
    name: 'hourlyPrompt55',
    label: 'Hourly Prompt 55',
    type: 'text',
    required: false,
  },
  {
    name: 'newsPrompt',
    label: 'News Prompt',
    type: 'text',
    required: false,
  },
  {
    name: 'weatherPrompt',
    label: 'Weather Prompt',
    type: 'text',
    required: false,
  },
  {
    name: 'trafficPrompt',
    label: 'Traffic Prompt',
    type: 'text',
    required: false,
  },
]

export const generalFormFields: StationFormFieldProps[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Station Name',
    required: false,
  },
  {
    name: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'https://www.station.com',
    required: false,
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    required: false,
    options: ['active', 'inactive'],
  },
  {
    name: 'omniplayerUrl',
    label: 'Omniplayer URL',
    type: 'url',
    placeholder: 'https://www.omniplayer.com',
    required: false,
  },
  {
    name: 'clientId',
    label: 'Client ID',
    type: 'number',
    required: false,
  },
  {
    name: 'clientSecret',
    label: 'Client Secret',
    type: 'text',
    required: false,
  },
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    required: false,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: false,
  },
]

export const stationFormDefaultValues: StationFormSchema = {
  name: '',
  website: '',
  status: 'active',
  omniplayerUrl: '',
  clientId: 0,
  clientSecret: '',
  username: '',
  password: '',
  systemPrompt: '',
  hourlyPrompt0: '',
  hourlyPrompt10: '',
  hourlyPrompt20: '',
  hourlyPrompt30: '',
  hourlyPrompt40: '',
  hourlyPrompt50: '',
  hourlyPrompt55: '',
  newsPrompt: '',
  weatherPrompt: '',
  trafficPrompt: '',
}

export const stationsTableHeads = [
  { label: 'Name', key: 'name' },
  { label: 'Station ID', key: 'stationId' },
  { label: 'Location', key: 'location' },
  { label: 'Website', key: 'website' },
  { label: 'Status', key: 'status' },
  { label: 'Actions', key: 'actions' },
]


