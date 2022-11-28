import  { Register } from '../models/register_pqr.model.js'
import { Pqrc} from '../models/pqrCategory.model.js'
import { Customer} from '../models/customers.model.js'

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Register.findAll({
            include: [{model:Customer}, {model:Pqrc}],
            
            where: {
                client_id: id
            },
          });
          
        if (itemId) {
            res.status(200).json(itemId);
        } else {
            res.status(404).json({message: "El usuario no existe."});
        }
        
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

