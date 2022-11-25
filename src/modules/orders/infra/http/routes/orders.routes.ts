import { Router } from 'express'

const ordersRoutes = Router()

ordersRoutes.get('/orders', (req, res) => {
  res.send('OK')
})

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
