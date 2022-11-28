import { Router } from 'express'
import {
    getRegisters,
    registerById,
    createRegister,
    deleteRegister,
    editRegister


} from '../controllers/register_pqr.controller.js'

export const registerRouter = Router()

registerRouter.get('/', getRegisters)
registerRouter.get('/:id', registerById)
registerRouter.post('/', createRegister)
registerRouter.delete('/:id', deleteRegister)
registerRouter.put('/:id', editRegister)