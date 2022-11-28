import  { Register } from '../models/register_pqr.model.js'
import { Traceability } from '../models/traceability.model.js'
import { transporter } from '../helpers/configGmail.js'

export const editRegister = async (req,res) => {
    const { id } = req.params
    try {

        const {  status } = req.body
        if(status !== 'Finalizado') {
            return res.status(500).json({ message: "El status debe ser igual a 'Finalizado' "})
        }
        const today = new Date()
    
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let dateNow = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() 
        let  date_register = `${dateNow} ${time}`

        const noveltyTraceability = await Traceability.create({
          register_pqr_id: id, date: date_register, novelty: 'Finalizado'
        })

        const info = await transporter.sendMail({
          from: '"Market Mix Team." <jorgetarifa33@gmail.com>', 
          to: 'oscar.sierra@misena.edu.co',
          subject: "PQR ha sido actualizada ✔", 
          text: "", 
          html: `
          <b> El estado de la PQR ha cambiado a: Finalizado.  Por favor verifica el nuevo estado del proceso. </b>
          `
        });

        const editRegister = await Register.findByPk(id)
        editRegister.status = status
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
