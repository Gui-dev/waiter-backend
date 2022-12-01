import { Request, Response } from 'express'

import { ListOrdersUseCase } from '../../../useCases/ListOrdersUseCase'
import { CreateOrdersUseCase } from '../../../useCases/CreateOrdersUseCase'
import { createOrderValidation } from '../../../validations/createOrderValidation'
import { UpdateOrderStatusUseCase } from '../../../useCases/UpdateOrderStatusUseCase'
import { updateStatusValidation } from '../../../validations/updateStatusValidation'
import { deleteOrderValidation } from '../../../validations/deleteOrderValidation'
import { DeleteOrderUseCase } from '../../../useCases/DeleteOrderUseCase'

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

  public async update (request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params
    const { status } = request.body
    const data = updateStatusValidation.parse({ order_id, status })
    const updateOrderStatusUseCase = new UpdateOrderStatusUseCase()
    await updateOrderStatusUseCase.execute({
      order_id: data.order_id,
      status: data.status.toUpperCase()
    })
    return response.sendStatus(204)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const { order_id } = deleteOrderValidation.parse(request.params)
    const deleteOrderUseCase = new DeleteOrderUseCase()
    await deleteOrderUseCase.execute({
      order_id
    })
    return response.sendStatus(204)
  }
}
