import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import {
    getRegisters,
    registerById,
    createRegister,
    deleteRegister,
    editRegister


} from '../controllers/register_pqr.controller.js'

export const registerRouter = Router()
const jsonParser = bodyParser.json();

registerRouter.get('/', getRegisters)
registerRouter.get('/:id', registerById)
registerRouter.post('/',upload.none(), createRegister)
registerRouter.delete('/:id', deleteRegister)
registerRouter.put('/:id',upload.none(), editRegister)