import { Request, Response } from 'express'

import { ListOrdersUseCase } from '../../../useCases/ListOrdersUseCase'
import { CreateOrdersUseCase } from '../../../useCases/CreateOrdersUseCase'
import { createOrderValidation } from '../../../validations/createOrderValidation'

export class OrderController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listOrdersUseCase = new ListOrdersUseCase()
    const orders = await listOrdersUseCase.execute()
    return response.status(201).json(orders)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const { table, products } = createOrderValidation.parse(request.body)
    const createOrdersUseCase = new CreateOrdersUseCase()
    const order = await createOrdersUseCase.execute({
      table,
      products
    })
    return response.status(201).json(order)
  }
}
