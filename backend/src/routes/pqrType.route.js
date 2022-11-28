import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import { 
    pqrtById,
    pqrt,
    createPqrt,
    editPqrt,
    deletePqrt
 } from '../controllers/pqrType.controller.js'

export const pqrtRouter = Router()
const jsonParser = bodyParser.json();

pqrtRouter.get('/', pqrt)
pqrtRouter.get('/:id', pqrtById)
pqrtRouter.post('/',upload.none(), createPqrt)
pqrtRouter.put('/:id',upload.none(), editPqrt)
pqrtRouter.delete('/:id', deletePqrt)
