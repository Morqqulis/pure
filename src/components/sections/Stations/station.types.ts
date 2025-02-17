import { Status } from '@prisma/client'
import { InputHTMLAttributes } from 'react'
import { z } from 'zod'
import { stationFormSchema } from './stations.schema'

export interface StationFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof z.infer<typeof stationFormSchema>
  label: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  required: boolean
  options?: Status[]
}

export type StationFormSchema = z.infer<typeof stationFormSchema>
