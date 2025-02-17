import { Status } from '@prisma/client'
import { InputHTMLAttributes } from 'react'

export interface ClientFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  placeholder?: string
  required: boolean
  options?: Status[]
}

