import { Router } from 'express'
import {
    responseById,
  
} from '../controllers/pqrByUserId.controller.js'

export const pqrUserByIdRouter = Router()


pqrUserByIdRouter.get('/:id', responseById)
