import { z } from 'zod'

export const createCategory = z.object({
  name: z.string({ required_error: 'Name is required' }),
  icon: z.string({ required_error: 'Icon is required' })
})
