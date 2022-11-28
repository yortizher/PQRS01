import { Router } from 'express'
import {
    editRegister


} from '../controllers/complete_pqr.controller.js'

export const completeRouter = Router()


completeRouter.put('/:id', editRegister)