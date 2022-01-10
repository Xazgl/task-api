import { application } from "express";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../db";
import tasksRouter from "./tasks.router";

export default class TasksModel extends Model { }

TasksModel.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    tableName: 'tasks'
})




