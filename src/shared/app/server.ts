import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'

import { routes } from './routes'
import { AppError } from '../error/AppError'

const app = express()
const PORT = 3333 || process.env.PORT

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.use(cors())
    app.use(routes)
    app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        response.status(err.statusCode).json({
          error: err.message
        })
      }

      console.log(err)

      response.status(500).json({
        error: 'Erro no Servidor'
      })
    })
    console.log('Conectado ao database')
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
