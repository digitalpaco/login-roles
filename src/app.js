import express from 'express'
import morgan from 'morgan'
import multer from 'multer'
import path, { join} from 'path'
import {v4 as uuidv4} from 'uuid'
import pkg from '../package.json'
import api from './routes'

const app = express()

/**
 * Middlewares
 * morgan('dev')
 */
app.use(morgan('dev'))


/**
 * API
 */
app.get('/', (req, res) => {
    res.status(200).json({
        author: pkg.author,
        name: pkg.name,
        description: pkg.description,
        version: pkg.version
    })
})
app.use('/api', api)

export default app