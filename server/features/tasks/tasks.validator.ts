import { RequestHandler } from "express"
import { httpError } from "../../service/http-error"
import { TaskDto } from "./tasks.dto"

export const IdValidator: RequestHandler = (req, res, next) => {
const id =+req.params.id
if(!isNaN(id) && id > 0) next()
else next(httpError(400,'Wrong Id'))
}


export const createTaskValidator: RequestHandler = (req, res, next) => {
    const task: TaskDto = req.body
    if(task.title && task.title.length >1) next()
    else next(httpError(400,'Wrong task'))

    
}