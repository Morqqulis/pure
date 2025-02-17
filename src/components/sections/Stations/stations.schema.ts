import { Station, Status } from '@prisma/client'
import { z } from 'zod'

export const stationFormSchema: z.ZodType<Partial<Station>> = z.object({
  name: z.string().min(1).optional(),
  website: z.string().url().optional(),
  status: z.nativeEnum(Status).optional(),
  omniplayerUrl: z.string().url().optional(),
  clientId: z.number().optional(),
  clientSecret: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  systemPrompt: z.string().optional(),
  hourlyPrompt0: z.string().optional(),
  hourlyPrompt10: z.string().optional(),
  hourlyPrompt20: z.string().optional(),
  hourlyPrompt30: z.string().optional(),
  hourlyPrompt40: z.string().optional(),
  hourlyPrompt50: z.string().optional(),
  hourlyPrompt55: z.string().optional(),
  newsPrompt: z.string().optional(),
  weatherPrompt: z.string().optional(),
  trafficPrompt: z.string().optional(),
})
