import { resolve } from 'node:path'
import multer, { diskStorage } from 'multer'

export const upload = multer({
  storage: diskStorage({
    destination (req, file, callback) {
      callback(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename (req, file, callback) {
      callback(null, `${Date.now()}&${file.originalname}`)
    }
  })
})
