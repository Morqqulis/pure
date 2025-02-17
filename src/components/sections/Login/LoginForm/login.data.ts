import { LoginFormFields } from './login.types'

export const loginFormFields: LoginFormFields[] = [
  {
    name: 'username',
    label: 'User name',
    placeholder: 'John Doe',
    type: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
    required: true,
  },
]
