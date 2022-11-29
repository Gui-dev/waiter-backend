import { z } from 'zod'

export const listProducts = z.object({
  category_id: z.string({ required_error: 'Category ID is required' })
})
