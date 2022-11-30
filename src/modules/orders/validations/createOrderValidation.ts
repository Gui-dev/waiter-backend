import { z } from 'zod'

export const createOrderValidation = z.object({
  table: z.string(),
  products: z.array(
    z.object({
      product: z.string(),
      quantity: z.number()
    })
  )
})
