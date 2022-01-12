import express from "express";
import { validator } from "sequelize/dist/lib/utils/validator-extras";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "./tasks.conroller";
import TasksModel from "./tasks.model";
import { getIdValidator } from "./tasks.validator";

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks

tasksRouter.get('/', getAllTasks)

tasksRouter.get('/:id', getTask)

tasksRouter.post('/', createTask)

tasksRouter.delete('/:id/delete', deleteTask)

tasksRouter.patch('/:id', updateTask)

tasksRouter.get('/:id',getIdValidator, getTask)

export default tasksRouter