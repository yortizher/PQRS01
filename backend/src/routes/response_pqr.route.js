import { Router } from 'express'
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
responseRouter.post('/', createResponse)
responseRouter.delete('/:id', deleteResponse)
responseRouter.put('/:id', editResponse)