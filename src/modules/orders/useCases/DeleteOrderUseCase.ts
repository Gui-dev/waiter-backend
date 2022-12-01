import { AppError } from '../../../shared/error/AppError'
import { Order } from '../infra/mongo/models/Order'

interface IDeleteOrderUseCase {
  order_id: string
}

export class DeleteOrderUseCase {
  public async execute ({ order_id }: IDeleteOrderUseCase): Promise<void> {
    if (!await Order.findByIdAndDelete(order_id)) {
      throw new AppError('Error to updated Order')
    }
  }
}
