import { Router } from 'express'

import { categoriesRoutes } from './../../../modules/categories/infra/http/routes/categories.routes'
import { productsRoutes } from './../../../modules/products/infra/http/routes/products.routes'
import { ordersRoutes } from './../../../modules/orders/infra/http/routes/orders.routes'

const routes = Router()

routes.use(categoriesRoutes)
routes.use(productsRoutes)
routes.use(ordersRoutes)

export { routes }
