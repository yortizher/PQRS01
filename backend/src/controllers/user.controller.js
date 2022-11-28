import { User } from '../models/users.model.js'
import bcryptjs from 'bcrypt'


export const user = async (req,res) => {
    try{
        const list = await User.findAll()
        res.json(list)
    }catch(err){
        console.log(err);
    }
   
}

export const userById = async (req,res) => {
    const { id } = req.params
    try{
        const userId = await User.findOne({
            where: {
              id,
            },
          });
          res.json(userId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createUser = async  (req,res) => {
    const salt = bcryptjs.genSaltSync();//uses the bcrypt npm package
    try{
        const { name,userName,document, password } = req.body
   
    const createUser= await User.create({
        name,userName,document,password,password: bcryptjs.hashSync( req.body.password.toString(), salt )
    })
    res.status(200).json({message: 'user was created succesfully', createUser})
    }catch(error){
        console.log(error)
    }
    
}

export const deleteUSer = async (req,res) => {
    const { id } = req.params
    try{
         await User.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `User with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editUser = async (req,res) => {
    const salt = bcryptjs.genSaltSync();
    const { id } = req.params
    try {
        const { name,userName,document,password } = req.body
    
        const editUser = await User.findByPk(id)
        editUser.name = name
        editUser.userName = userName
        editUser.document = document
        editUser.password = bcryptjs.hashSync( password.toString(), salt )
        await editUser.save()
        
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editUser})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
