import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect, port} from '../helpers/helper.js'


export const db = new Sequelize("railway", "root", "cHK8zFx6i3MwxmCthiMD", {
    host:'containers-us-west-76.railway.app',
    dialect:"mysql",
    port: 5776
  })

