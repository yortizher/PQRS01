import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Pqrc } from './pqrCategory.model.js'
import User from "./users.model.js";  
import Customer from "./customers.model.js"; 

const { STRING, INTEGER } = DataTypes

export const Register = db.define('register',{ 
        id: {
            type: STRING(50),
            primaryKey: true
            
        },
        client_id:{
            type: INTEGER,
            allowNull: true
        },
        user_id: {
            type: INTEGER,
            allowNull: true
        },
        pqr_category_id:{
            type: INTEGER,
            allowNull: true
        },
        date_register:{ 
            type: STRING,
            allowNull: true
        },
        description:{ 
            type: STRING,
            allowNull: true
        },
        status:{ 
            type: STRING,
            allowNull: true,
            defaultValue: 'En proceso'
        }
        },{timestamps: false})


     Register.belongsTo(Pqrc, {foreignKey: 'pqr_category_id', sourceKey: 'id'});
     Pqrc.hasMany(Register, {foreignKey: 'pqr_category_id', targetId: 'id'})

     Register.belongsTo(User, {foreignKey: 'user_id', sourceKey: 'id'});
     User.hasMany(Register, {foreignKey: 'user_id', targetId: 'id'})

     Register.belongsTo(Customer, {foreignKey: 'client_id', sourceKey: 'id'});
     Customer.hasMany(Register, {foreignKey: 'client_id', targetId: 'id'})
        