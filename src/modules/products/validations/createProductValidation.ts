import { z } from 'zod'

export const createProductValidation = z.object({
  category: z.string(),
  name: z.string(),
  description: z.string(),
  imagePath: z.string(),
  price: z.string().transform(price => Number(price)),
  ingredients: z.array(
    z.object({
      name: z.string(),
      icon: z.string()
    })
  )
})
