import { Router } from 'express'
import multer  from 'multer'
const upload = multer()

import {
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse

} from '../controllers/response_pqr.controller.js'

export const responseRouter = Router()

responseRouter.get('/', getResponses)
responseRouter.get('/:id', responseById)
responseRouter.post('/',upload.none(), createResponse)
responseRouter.delete('/:id', deleteResponse)
responseRouter.put('/:id',upload.none(), editResponse)