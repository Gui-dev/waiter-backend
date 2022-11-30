import { AppError } from '../../../shared/error/AppError'
import { IOrder, Order } from '../infra/mongo/models/Order'

interface ICreateOrdersUseCase {
  table: string
  products: Array<{
    product: string
    quantity: number
  }>
}

export class CreateOrdersUseCase {
  public async execute ({ table, products }: ICreateOrdersUseCase): Promise<IOrder> {
    const order = await Order.create({
      table,
      products
    })
    if (!order) {
      throw new AppError('Error creating order')
    }
    return order
  }
}
