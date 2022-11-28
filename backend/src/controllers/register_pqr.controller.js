import  { Register } from '../models/register_pqr.model.js'
import { Customer } from '../models/customers.model.js'
import { Traceability } from '../models/traceability.model.js'
import { transporter } from '../helpers/configGmail.js'
import { v4 } from 'uuid'
import Pqrc from '../models/pqrCategory.model.js'

export const getRegisters = async (req,res) => {
    try{
        const registerList = await Register.findAll({ include: { all: true }})
        res.json(registerList)
    }catch(err){
        console.log(err);
    }
}

export const registerById = async (req,res) => {
    const { id } = req.params
    try{
        const registerId = await Register.findAll({
          include: [{model:Customer}, {model:Pqrc}],
            where: {
              user_id: id,
            },
          });

          if (registerId) {
            res.json(registerId);
          } else {
            res.status(404).json({message: "El registro no existe"});
          }
        
          console.log(registerId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createRegister = async  (req,res) => {

    try {
    
    const { client_id, user_id, pqr_category_id, description} = req.body
    
    const uuid = v4()
    const today = new Date()
    
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateNow = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() 
    let  date_register = `${dateNow} ${time}`

    const createRegister = await Register.create({ id: uuid,
        client_id, user_id, pqr_category_id, date_register, description, status: "En proceso" 
    })

    const noveltyTraceability = await Traceability.create({
        register_pqr_id: uuid, date: date_register, novelty: 'En proceso'
    })

    const info = await transporter.sendMail({
        from: '"Market Mix Team." <jorgetarifa33@gmail.com>', 
        to: 'oscar.sierra@misena.edu.co',
        subject: "PQR ha sido actualizada ✔", 
        text: "", 
        html: `
        <b> El estado de la PQR ha cambiado a: En proceso.  Por favor verifica las novedades.</b>
        `
      });


    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteRegister = async (req,res) => {
    const { id } = req.params
    try{
      const deleteOne = await Register.findOne({
        where: {
          id,
        },
      });
  
        res.status(200).json({message: `Register with id:${id} was succesfully removed`})
    
       }catch(err){
            console.error(err)
       }
}

export const editRegister = async (req,res) => {
    const { id } = req.params
    try {

        const { client_id, pqr_category_id, date_register, description } = req.body
    
        const editRegister = await Register.findByPk(id)
        editRegister.client_id = client_id
        editRegister.pqr_category_id = pqr_category_id
        editRegister.date_register = date_register
        editRegister.description = description
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
