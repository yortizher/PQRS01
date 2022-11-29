import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import {
    editRegister


} from '../controllers/complete_pqr.controller.js'

export const completeRouter = Router()

completeRouter.put('/:id',upload.none(), editRegister)