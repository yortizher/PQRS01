import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";


const { STRING, INTEGER } = DataTypes


         export const User= db.define('user',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: true
            },
          
            userName: {
                type: STRING,
                allowNull: true
            },
            document: {
                type: STRING,
                allowNull: true
            },
            password:{
                type: STRING,
                allowNull: true
            },



        },{timestamps: false})
  
    export default User