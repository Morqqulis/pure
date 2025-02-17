import { ClientFormSchema } from './clients.schema'
import { ClientFormFieldProps } from './clients.types'

export const clientFormFields: ClientFormFieldProps[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'John Doe',
    required: false,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: false,
  },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    placeholder: 'Acme Inc.',
    required: false,
  },
  {
    name: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'https://www.acmeinc.com',
    required: false,
  },
  {
    name: 'logo',
    label: 'Logo',
    type: 'url',
    required: false,
    placeholder: 'https://www.acmeinc.com/logo.png',
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    options: ['active', 'inactive'],
    required: false,
    placeholder: 'active or inactive',
  },
]

export const clientFormDefaultValues: Partial<ClientFormSchema> = {
  name: '',
  email: '',
  company: '',
  website: '',
  logo: '',
  status: 'active',
}
