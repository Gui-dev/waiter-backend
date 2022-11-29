import { AppError } from '../../../shared/error/AppError'
import { IProduct, Product } from '../infra/mongo/models/Product'

export type CreateProductsProps = {
  category: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: Array<{
    name: string
    icon: string
  } | null>
}

export class CreateProductsUseCase {
  public async execute (data: CreateProductsProps): Promise<IProduct> {
    const product = await Product.create({
      ...data
    })

    if (!product) {
      throw new AppError('Error creating product')
    }

    return product
  }
}
