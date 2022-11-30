import { Document, Model, model, Schema } from 'mongoose'
import { IProduct } from '../../../../products/infra/mongo/models/Product'

export interface IOrder extends Document {
  table: string
  status: string
  products: IProduct[]
  createdAt: Date
}

export const OrderSchema = new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
    required: true
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
})

export const Order: Model<IOrder> = model<IOrder>('Order', OrderSchema)
