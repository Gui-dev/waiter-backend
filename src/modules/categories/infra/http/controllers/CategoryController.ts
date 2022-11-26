import { Request, Response } from 'express'
import { CreateCategoriesUseCase } from '../../../useCases/CreateCategoriesUseCase'
import { ListCategoriesUseCase } from '../../../useCases/ListCategoriesUseCase'
import { createCategory } from '../../../validations/createCategory'

export class CategoryController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listCategories = new ListCategoriesUseCase()
    const categories = await listCategories.execute()
    return response.status(201).json(categories)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const { name, icon } = createCategory.parse(request.body)
    const createCategoriesUseCase = new CreateCategoriesUseCase()
    const category = await createCategoriesUseCase.execute({
      name,
      icon
    })
    return response.status(201).json(category)
  }
}
