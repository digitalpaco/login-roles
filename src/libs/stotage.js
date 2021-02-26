import multer, { diskStorage } from "multer";
import { extname, join } from 'path'
import { v4 as uuid} from 'uuid'

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, join(__dirname, '../public/img/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}-${Date.now()}${extname(file.originalname)}`)
    }
})

export const upload = multer({storage})