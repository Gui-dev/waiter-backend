import { Router } from 'express'
import { CategoryController } from './../controllers/CategoryController'

const categoriesRoutes = Router()
const category = new CategoryController()

categoriesRoutes.get('/categories', category.index)

categoriesRoutes.post('/categories', category.store)

categoriesRoutes.get('/categories/:category_id/products', category.show)

export {
  categoriesRoutes
}
