import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";



const { STRING, INTEGER } = DataTypes


         export const Pqrt  = db.define('pqrTypes',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: false
            }

        },{timestamps: false})

export default Pqrt
            