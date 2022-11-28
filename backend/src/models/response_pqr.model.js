import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Customer from "./customers.model.js"; 
import { Register } from "./register_pqr.model.js";

const { STRING, INTEGER } = DataTypes

export const Response = db.define('response',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        register_pqr_id:{
            type: STRING,
            allowNull: true
        },
        user_id: {
            type: INTEGER,
            allowNull: true
        },
        desc_solution:{
            type: STRING,
            allowNull: true
        }
        })


        Response.belongsTo(Register, {foreignKey: 'register_pqr_id', sourceKey: 'id'});
        Register.hasMany(Response, {foreignKey: 'register_pqr_id', targetId: 'id'}); 
        
        Response.belongsTo(Customer, {foreignKey: 'user_id', sourceKey: 'id'});
        Customer.hasMany(Response, {foreignKey: 'user_id', targetId: 'id'});