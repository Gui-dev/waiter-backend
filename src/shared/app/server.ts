import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

import { routes } from './routes'
import { AppError } from '../error/AppError'

const app = express()
const PORT = 3333 || process.env.PORT

app.use(cors())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      error: err.message
    })
  }

  response.status(500).json({
    error: 'Erro no Servidor'
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
