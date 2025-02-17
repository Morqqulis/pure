import { Client, ClientStatus } from '@prisma/client'
import { z } from 'zod'

export const clientFormSchema: z.ZodType<Partial<Client>> = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  logo: z.string().optional(),
  status: z.nativeEnum(ClientStatus).optional(),
})

export type ClientFormSchema = z.infer<typeof clientFormSchema>
