import { Router } from 'express'
import { CategoryController } from './../controllers/CategoryController'

const categoriesRoutes = Router()
const category = new CategoryController()

categoriesRoutes.get('/categories', category.index)

categoriesRoutes.post('/categories', (req, res) => {
  res.send('OK')
})

export {
  categoriesRoutes
}
