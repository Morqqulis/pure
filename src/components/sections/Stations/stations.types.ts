import { InputHTMLAttributes } from 'react'
import { z } from 'zod'
import { stationFormSchema } from './stations.schema'

export interface StationFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof z.infer<typeof stationFormSchema>
  label: string
  type: string
  placeholder?: string
  required: boolean
  options?: string[]
}

export type StationFormSchema = z.infer<typeof stationFormSchema>
