import { Router } from 'express'

import { OrderController } from './../controllers/OrderController'

const ordersRoutes = Router()
const order = new OrderController()

ordersRoutes.get('/orders', order.index)

ordersRoutes.post('/orders', (req, res) => {
  res.send('OK')
})

ordersRoutes.patch('/orders/:order_id', (req, res) => {
  res.send('OK')
})

ordersRoutes.delete('/orders/:order_id', (req, res) => {
  res.send('OK')
})

export {
  ordersRoutes
}
