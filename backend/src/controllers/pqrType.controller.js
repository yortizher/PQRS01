import { Pqrt} from '../models/pqrType.model.js'



export const pqrt = async (req,res) => {
    try{
        const list = await Pqrt.findAll()
        res.json(list)
    }catch(err){
        console.log(err);
    }
   
}

export const pqrtById = async (req,res) => {
    const { id } = req.params
    try{
        const pqrtId = await Pqrt.findOne({
            where: {
              id,
            },
          });
          res.json(pqrtId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createPqrt = async  (req,res) => {
    try{
        const {name} = req.body
        console.log(name)
    if( !name ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRegister = await Pqrt.create({
        name
    })
    res.status(200).json({message: 'Positions was created succesfully', createRegister})
    }catch(error){
        console.log(error)
    }
    
}

export const deletePqrt = async (req,res) => {
    const { id } = req.params
    try{
         await Pqrt.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Pqr type with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editPqrt= async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editPqrt = await Pqrt.findByPk(id)
        editPqrt.name = name
        await editPqrt.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editPqrt})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}