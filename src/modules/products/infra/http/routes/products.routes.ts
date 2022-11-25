import { Router } from 'express'

const productsRoutes = Router()

productsRoutes.get('/products', (req, res) => {
  res.send('OK')
})

productsRoutes.post('/products', (req, res) => {
  res.send('OK')
})

productsRoutes.get('/categories/:categoty_id/products', (req, res) => {
  res.send('OK')
})

export {
  productsRoutes
}
