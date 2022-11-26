import { Request, Response } from 'express'

import { ListProductsUseCase } from '../../../useCases/ListProductsUseCase'

export class ProductController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = new ListProductsUseCase()
    const products = await listProductsUseCase.execute()
    return response.status(201).json(products)
  }
}
