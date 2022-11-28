import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import { 
    userById,
    user,
    createUser,
    editUser,
    deleteUSer
 } from '../controllers/user.controller.js'
import { validateJWT } from '../middlewares/validate-jwt.js'

export const userRouter = Router()
const jsonParser = bodyParser.json();

userRouter.get('/', user)
userRouter.get('/:id', userById)
userRouter.post('/',upload.none(),createUser)
userRouter.put('/:id',upload.none(), editUser)
userRouter.delete('/:id',validateJWT, deleteUSer)