import { Request, Response } from 'express'
import { ListCategoriesUseCase } from '../../../useCases/ListCategoriesUseCase'

export class CategoryController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listCategories = new ListCategoriesUseCase()
    const categories = await listCategories.execute()
    return response.status(201).json(categories)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    return response.status(201).json({})
  }
}
