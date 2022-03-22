import Router from 'express'
import PasswordController from '../controllers/PasswordController.js'
const passwordRouter = new Router()

passwordRouter.post('/passwords', PasswordController.create)
passwordRouter.get('/passwords', PasswordController.getAll)
passwordRouter.get('/passwords/:id', PasswordController.getOne)
passwordRouter.put('/passwords', PasswordController.update)
passwordRouter.delete('/passwords/:id', PasswordController.delete)

export default passwordRouter