import { Router } from 'express'
import {
    getTraceability,
    traceabilityById
  


} from '../controllers/traceability.controller.js'

export const traceabilityRouter = Router()

traceabilityRouter.get('/', getTraceability)
traceabilityRouter.get('/:id', traceabilityById)
