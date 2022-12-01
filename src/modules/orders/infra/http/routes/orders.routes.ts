import { Router } from 'express'

import { OrderController } from './../controllers/OrderController'

const ordersRoutes = Router()
const order = new OrderController()

ordersRoutes.get('/orders', order.index)

ordersRoutes.post('/orders', order.store)

ordersRoutes.patch('/orders/:order_id', order.update)

ordersRoutes.delete('/orders/:order_id', (req, res) => {
  res.send('OK')
})

export {
  ordersRoutes
}
