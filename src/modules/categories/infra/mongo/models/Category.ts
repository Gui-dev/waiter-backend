import { Document, Model, model, Schema } from 'mongoose'

export interface ICategory extends Document {
  name: string
  icon: string
}

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

export const Category: Model<ICategory> = model<ICategory>('Category', CategorySchema)
