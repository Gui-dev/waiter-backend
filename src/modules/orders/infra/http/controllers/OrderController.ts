import { Request, Response } from 'express'

import { ListOrdersUseCase } from '../../../useCases/ListOrdersUseCase'

export class OrderController {
  public async index (request: Request, response: Response): Promise<Response> {
    const listOrdersUseCase = new ListOrdersUseCase()
    const orders = await listOrdersUseCase.execute()
    return response.status(201).json(orders)
  }
}
