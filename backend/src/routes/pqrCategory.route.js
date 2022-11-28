import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import { 
    pqrcById,
    pqrc,
    createPqrc,
    editPqrc,
    deletePqrc
 } from '../controllers/pqrCategory.controller.js'

export const pqrcRouter = Router()
const jsonParser = bodyParser.json();

pqrcRouter.get('/', pqrc)
pqrcRouter.get('/:type_pqr_id', pqrcById)
pqrcRouter.post('/',upload.none(), createPqrc)
pqrcRouter.put('/:id',upload.none(), editPqrc)
pqrcRouter.delete('/:id', deletePqrc)
