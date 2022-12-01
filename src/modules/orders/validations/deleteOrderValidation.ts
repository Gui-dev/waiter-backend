import { z } from 'zod'

export const deleteOrderValidation = z.object({
  order_id: z.string({ required_error: 'Order ID is required' })
})
