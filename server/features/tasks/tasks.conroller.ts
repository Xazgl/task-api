import  {Request , Response }from 'express'
import { createTaskService, getAllTasksService, getTaskService , deleteTaskService} from './task.service'
import TasksModel from './tasks.model'


export async function getAllTasks(req:Request,res:Response) {
 const tasks = await getAllTasksService()
 res.send(tasks)
}

export async function getTask(req:Request,res:Response) {
    const id = +req.params.id
    const task=await getTaskService(id)
    res.send(task)
}

export async function createTask(req:Request,res:Response) {
 const newTask = req.body
 const taskFromDb = await createTaskService(newTask)
 res.send(taskFromDb)
}



export async function deleteTask (req:Request, res: Response) {
    const id = +req.params.id
    const deleteTask = await deleteTaskService(id)
    res.send(deleteTask)
}