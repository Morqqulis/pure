import { Client, Status } from '@prisma/client'
import { z } from 'zod'

export const clientFormSchema: z.ZodType<Partial<Client>> = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  logo: z.string().optional(),
  status: z.nativeEnum(Status).optional(),
})

export type ClientFormSchema = z.infer<typeof clientFormSchema>
