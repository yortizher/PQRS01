import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Register } from './register_pqr.model.js'

const { STRING, INTEGER } = DataTypes

export const Traceability = db.define('traceability',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        register_pqr_id:{
            type: STRING,
            allowNull: true
        },  
        date: {
            type: STRING,
            allowNull: true
        },
        novelty:{
            type: STRING,
            allowNull: true
        }
        })


        Traceability.belongsTo(Register, {foreignKey: 'register_pqr_id', sourceKey: 'id'});
        Register.hasMany(Traceability, {foreignKey: 'register_pqr_id', targetId: 'id'})
        