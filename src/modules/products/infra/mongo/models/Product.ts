import { Document, Model, model, Schema } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: {
    name: string
    icon: string
  }[]
  category: string
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        icon: {
          type: String,
          required: true
        }
      }
    ],
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
})

export const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema)
