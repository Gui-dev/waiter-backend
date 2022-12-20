import { AppError } from '../../../shared/error/AppError'
import { IOrder, Order } from '../infra/mongo/models/Order'
import { io } from './../../../shared/app/server'

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
    const orderDetails = await order.populate('products.product')
    io.emit('order@new', orderDetails)
    return order
  }
}
