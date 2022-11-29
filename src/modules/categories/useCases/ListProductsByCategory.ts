import { AppError } from '../../../shared/error/AppError'
import { Product } from '../../products/infra/mongo/models/Product'

interface IListProductsByCategory {
  category_id: string
}

export class ListProductsByCategory {
  public async execute ({ category_id }: IListProductsByCategory) {
    const products = await Product.find().where('category').equals(category_id)
    if (products.length <= 0) {
      throw new AppError('Products not found', 404)
    }

    return products
  }
}
