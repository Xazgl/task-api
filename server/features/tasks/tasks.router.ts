import express from "express";
import { createTask, deleteTask, getAllTasks, getTask } from "./tasks.conroller";
import TasksModel from "./tasks.model";

const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks

tasksRouter.get('/', getAllTasks)

tasksRouter.get('/:id', getTask)

tasksRouter.post('/', createTask)

tasksRouter.delete('/:id/delete', deleteTask)

export default tasksRouter