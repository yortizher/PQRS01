import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Pqrt from "./pqrType.model.js"


const { STRING, INTEGER } = DataTypes


         export const Pqrc  = db.define('pqrCategory',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: false
            },
            type_pqr_id:{
                type: INTEGER,
                allowNull: true
            },

        },{timestamps: false})
        Pqrc.belongsTo(Pqrt, {foreignKey: 'type_pqr_id', sourceKey: 'id'});
        Pqrt.hasMany(Pqrc, {foreignKey: 'type_pqr_id', targetId: 'id'});
export default Pqrc
            