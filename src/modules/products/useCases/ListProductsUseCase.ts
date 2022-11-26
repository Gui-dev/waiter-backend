import { AppError } from '../../../shared/error/AppError'
import { IProduct, Product } from '../infra/mongo/models/Product'

export class ListProductsUseCase {
  public async execute (): Promise<IProduct[]> {
    const products = await Product.find()
    if (products.length <= 0) {
      throw new AppError('Products not found', 404)
    }

    return products
  }
}
