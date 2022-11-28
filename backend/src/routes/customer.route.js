import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import { 
    customerById,
    customer,
    createCustomer,
    editCustomer,
    deleteCustomer
 } from '../controllers/customer.controller.js'

export const customerRouter = Router()
const jsonParser = bodyParser.json();

customerRouter.get('/', customer)
customerRouter.get('/:id', customerById)
customerRouter.post('/',upload.none(), createCustomer)
customerRouter.put('/:id',upload.none(), editCustomer)
customerRouter.delete('/:id', deleteCustomer)