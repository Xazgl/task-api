import express from "express";
import { validator } from "sequelize/dist/lib/utils/validator-extras";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "./tasks.conroller";
import TasksModel from "./tasks.model";
import { IdValidator } from "./tasks.validator";


const tasksRouter = express.Router()

// RESTful API
// CRUD (Create Read Update Delete)

// Read (HTTP - GET)
// Read all tasks


tasksRouter.get('/', getAllTasks)

tasksRouter.get('/:id', getTask)

tasksRouter.post('/', createTaskValidator, createTask)

tasksRouter.delete('/:id/delete',IdValidator, deleteTask)

tasksRouter.patch('/:id',IdValidator, createTaskValidator, updateTask)

tasksRouter.get('/:id',IdValidator, getTask)

export default tasksRouter

function createTaskValidator(arg0: string, createTaskValidator: any, createTask: (req: express.Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => Promise<...>) {
    throw new Error("Function not implemented.");
}
