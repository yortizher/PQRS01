import { Pqrc} from '../models/pqrCategory.model.js'
import { Pqrt } from '../models/pqrType.model.js'


export const pqrc = async (req,res) => {
    try{
        const list = await Pqrc.findAll({include:[{model:Pqrt}]})
        res.json(list)
    }catch(err){
        console.log(err);
    }
   
}

export const pqrcById = async (req,res) => {
    const { type_pqr_id } = req.params
    try{
        const pqrcId = await Pqrc.findAll({
            where: {
              type_pqr_id,
            },
          });
          res.json(pqrcId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createPqrc = async  (req,res) => {
    try{
        const {name,type_pqr_id} = req.body
     
    if( !name || !type_pqr_id ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRegister = await Pqrc.create({
        name,type_pqr_id
    })
    res.status(200).json({message: 'Positions was created succesfully', createRegister})
    }catch(error){
        console.log(error)
    }
    
}

export const deletePqrc = async (req,res) => {
    const { id } = req.params
    try{
         await Pqrc.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Pqr type with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editPqrc= async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editPqrc = await Pqrc.findByPk(id)
        editPqrc.name = name
        await editPqrc.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editPqrc})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
