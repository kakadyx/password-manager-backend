import Router from 'express'
import GroupController from '../controllers/GroupController.js'
const groupRouter = new Router()

groupRouter.post('/groups', GroupController.create)
groupRouter.get('/groups', GroupController.getAll)
groupRouter.get('/groups/:id', GroupController.getOne)
groupRouter.put('/groups', GroupController.update)
groupRouter.delete('/groups/:id', GroupController.delete)

export default groupRouter