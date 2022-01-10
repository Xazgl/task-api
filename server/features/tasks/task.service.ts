import { TaskDto } from "./tasks.dto"
import TasksModel from "./tasks.model"

export  async function getAllTasksService() {
 const tasks = await TasksModel.findAll()
 return tasks
}

export async function createTaskService(newTask: TaskDto) {
    const taskFromDb = await TasksModel.create(newTask)
    return taskFromDb 
}

export async function getTaskService(id: number) {
    const task = await TasksModel.findByPk(id)
    return task
  }



export async function deleteTaskService(id: number) {
  const deletTask = await TasksModel.destroy({
    where: {
       id : id 
    }
  })
  const tasks = await TasksModel.findAll()
  return tasks
}