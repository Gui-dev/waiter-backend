import { AppError } from '../../../shared/error/AppError'
import { Category, ICategory } from '../infra/mongo/models/Category'

export class ListCategoriesUseCase {
  public async execute (): Promise<ICategory[]> {
    const categories = await Category.find()
    if (categories.length <= 0) {
      throw new AppError('No category found', 404)
    }

    return categories
  }
}
