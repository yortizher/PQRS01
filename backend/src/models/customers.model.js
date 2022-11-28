import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";


const { STRING, INTEGER, DATEONLY} = DataTypes


         export const Customer= db.define('customer',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            names: {
                type: STRING,
                allowNull: true
            },
            document: {
                type: STRING,
                allowNull: true
            },
            email: {
                type: STRING,
                allowNull: true
            },
            
            surnames: {
                type: STRING,
                allowNull: true
            },
            fullName:{
                type: STRING,
                allowNull: true
            },
            dateOfBirth:{
                type: STRING,
                allowNull: true
            },
            age:{
                type: STRING,
                allowNull: true
        
            },
          
            address: {
                type: STRING,
                allowNull: true
            },
            phone:{
                type: STRING,
                allowNull: true
            },



        })
  
    export default Customer