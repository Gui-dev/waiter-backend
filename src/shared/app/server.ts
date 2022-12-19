import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import { resolve } from 'node:path'
import http from 'node:http'

import { routes } from './routes'
import { AppError } from '../error/AppError'
import { ZodError } from 'zod'

const PORT = 3333 || process.env.PORT

mongoose.connect('mongodb://localhost:27017/waiter-app')
  .then(() => {
    const app = express()
    const server = http.createServer(app)
    app.use(express.json())
    app.use(cors())
    app.use('/uploads', express.static(resolve(__dirname, '..', '..', '..', 'uploads')))
    app.use(routes)
    app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message
        })
      } else if (err instanceof ZodError) {
        return response.status(400).json({
          status: 'error',
          message: err.errors[0].message
        })
      }

      console.error(err)

      return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
      })
    })
    console.log('Conectado ao database')
    server.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
