import { RequestHandler } from "express"

export const getIdValidator: RequestHandler = (req, res, next) => {
const id =+req.params.id
if(!isNaN(id) && id > 0) next()
else next(httpsError(400,'Wrong Id'))
}