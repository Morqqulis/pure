import { LoginSchema } from './login.schema'

export type LoginFormFields = {
  name: keyof LoginSchema
  label: string
  placeholder: string
  type: string
  required?: boolean
}
