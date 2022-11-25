import { Router } from 'express'

const categoriesRoutes = Router()

categoriesRoutes.get('/categories', (req, res) => {
  res.send('OK')
})

categoriesRoutes.post('/categories', (req, res) => {
  res.send('OK')
})

export {
  categoriesRoutes
}
