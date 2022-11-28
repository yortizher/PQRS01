import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect, port} from '../helpers/helper.js'


export const db = new Sequelize("railway", "root", "Jd59g9dr1tw2xgLcK0SN", {
    host:'containers-us-west-91.railway.app',
    dialect:"mysql",
    port: 6528
  })

