import { Router } from 'express'

import { ProductController } from './../controllers/ProductController'
import { upload } from '../../../../../config/multerConfig'

const productsRoutes = Router()
const product = new ProductController()

productsRoutes.get('/products', product.index)

productsRoutes.post('/products', upload.single('image'), product.store)

productsRoutes.get('/categories/:categoty_id/products', (req, res) => {
  res.send('OK')
})

export {
  productsRoutes
}
