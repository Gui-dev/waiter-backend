import { AppError } from '../../../shared/error/AppError'
import { Order } from '../infra/mongo/models/Order'

interface IUpdateOrderStatusUseCase {
  order_id: string
  status: string
}

export class UpdateOrderStatusUseCase {
  public async execute ({ order_id, status }: IUpdateOrderStatusUseCase): Promise<void> {
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      throw new AppError('Status should be one of these: WAITING, IN_PRODUCTION, DONE')
    }

    if (!await Order.findByIdAndUpdate(order_id, { status })) {
      throw new AppError('Error to updated Order')
    }
  }
}
