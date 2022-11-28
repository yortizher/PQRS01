import { Router } from 'express'
import { errorResponse } from '../controllers/error404.controller.js'


export const errorRouter = Router()

errorRouter.get('/', errorResponse )