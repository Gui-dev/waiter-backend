import { Router } from 'express'

import { ProductController } from './../controllers/ProductController'

const productsRoutes = Router()
const product = new ProductController()

productsRoutes.get('/products', product.index)

productsRoutes.post('/products', (req, res) => {
  res.send('OK')
})

productsRoutes.get('/categories/:categoty_id/products', (req, res) => {
  res.send('OK')
})

export {
  productsRoutes
}
