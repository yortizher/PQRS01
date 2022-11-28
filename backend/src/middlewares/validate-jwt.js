import { response } from 'express'
import jwt from 'jsonwebtoken'

export const validateJWT = (req,res = response,next) =>{
    const token =req.header('x-token')
    console.log(token)
    next();
    }