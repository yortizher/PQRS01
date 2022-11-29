import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import {
    editRegister


} from '../controllers/complete_pqr.controller.js'

export const completeRouter = Router()
const jsonParser = bodyParser.json();

completeRouter.put('/:id',upload.none(), editRegister)