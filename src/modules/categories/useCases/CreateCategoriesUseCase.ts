import { Category, ICategory } from '../infra/mongo/models/Category'
import { AppError } from '../../../shared/error/AppError'

type CreateCategoriesProps = {
  name: string
  icon: string
}

export class CreateCategoriesUseCase {
  public async execute ({ name, icon }: CreateCategoriesProps): Promise<ICategory> {
    if (!name || !icon) {
      throw new AppError('Name and Icon is required')
    }
    const category = await Category.create({
      name,
      icon
    })

    return category
  }
}
