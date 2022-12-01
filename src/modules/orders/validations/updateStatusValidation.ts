import { z } from 'zod'

export const updateStatusValidation = z.object({
  order_id: z.string({ required_error: 'Order ID is required' }),
  status: z.string({ required_error: 'Status is required' })
})
