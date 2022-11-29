import { Request, Response } from 'express'

import { ListProductsUseCase } from '../../../useCases/ListProductsUseCase'
import { CreateProductsProps, CreateProductsUseCase } from '../../../useCases/CreateProductsUseCase'
import { createProductValidation } from '../../../validations/createProductValidation'

export class ProductController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = new ListProductsUseCase()
    const products = await listProductsUseCase.execute()
    return response.status(201).json(products)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const data = request.body
    const file = request.file
    const imagePath = file && file.filename
    const dataParse = {
      ...data,
      imagePath,
      ingredients: data.ingredients ? JSON.parse(data.ingredients) : []
    }
    const result: CreateProductsProps = createProductValidation.parse(dataParse)
    const createProduct = new CreateProductsUseCase()
    const products = await createProduct.execute(result)
    return response.status(201).json(products)
  }
}
