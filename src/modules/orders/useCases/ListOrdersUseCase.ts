import { AppError } from '../../../shared/error/AppError'
import { IOrder, Order } from '../infra/mongo/models/Order'

export class ListOrdersUseCase {
  public async execute (): Promise<IOrder[]> {
    const orders = await Order.find()
    if (orders.length <= 0) {
      throw new AppError('Orders not found', 404)
    }
    return orders
  }
}
