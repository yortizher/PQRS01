import  { Response } from '../models/response_pqr.model.js'
import  { Register } from '../models/register_pqr.model.js'
import { Traceability } from '../models/traceability.model.js'
import { transporter } from '../helpers/configGmail.js'
import Customer from '../models/customers.model.js'
import User from '../models/users.model.js'

export const getResponses = async (req,res) => {
    try{
        const list = await Response.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Register.findAll({
            include: [{model:Customer}, {model:User}],
            
            where: {
                user_id: id
            },
          });
          
        if (itemId) {
            res.status(200).json(itemId);
        } else {
            res.status(404).json({message: "El registro no existe"});
        }
        
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createResponse = async  (req,res) => {

    try {
    
    const { register_pqr_id, user_id, desc_solution } = req.body
   
    const today = new Date()
    
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateNow = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() 
    let  date_register = `${dateNow} ${time}`

    const createRegister = await Response.create({
       register_pqr_id, user_id, desc_solution
    })

    const searchByPqr_id = await Register.findAll({
        include: [{model:Customer}],
        where: {
            id: register_pqr_id
        }
    })

    const noveltyTraceability = await Traceability.create({
        register_pqr_id, date: date_register, novelty: 'Contestado'
    })

    const info = await transporter.sendMail({
        from: '"Market Mix Team." <jorgetarifa33@gmail.com>', 
        to: 'envioshseq@gmail.com',
        subject: "PQR ha sido actualizada ✔", 
        text: `PQR con N° radicado ha sido actualizado a: Contestado. Por favor, verifica las novedades.`, 
        html: ""
      });


    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne = await Response.destroy({
            where: {
                id
            }
        })
     
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       
       }catch(err){
            console.error(err)
       }
}

export const editResponse = async (req,res) => {
    const { id } = req.params
    try {

        const { register_pqr_id, user_id, desc_solution } = req.body
    
        const editRegister = await Response.findByPk(id)
        editRegister.register_pqr_id = register_pqr_id
        editRegister.user_id = user_id
        editRegister.desc_solution = desc_solution
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
