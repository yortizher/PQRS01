import { Router } from 'express'
import multer  from 'multer'
import bodyParser  from 'body-parser';
const upload = multer()
import { 
    login
 } from '../controllers/auth.controller.js'


export const router =Router();
const jsonParser = bodyParser.json();

router.post('/api/v1/auth/login',upload.none(),login)