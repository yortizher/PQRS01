import { Register } from '../models/register_pqr.model.js';
import  { Traceability } from '../models/traceability.model.js'

export const getTraceability = async (req,res) => {
    try{
        const list = await Traceability.findAll({ include: { all: true }})
        res.json(list)
    }catch(err){
        console.log(err);
    }
}

export const traceabilityById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Traceability.findAll({
          include: [{model:Register}],
            where: {
              register_pqr_id:id,
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

