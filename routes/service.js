import {Router} from 'express'
import { createService, getAllServices, updateService, deleteService } from '../controllers/serviceController.js'
import { verifyUser } from '../middlewares/verifyUser.js'

const serviceRouter = Router()

serviceRouter.get('/service', getAllServices)
serviceRouter.post('/service', verifyUser, createService)
serviceRouter.put('/service/:id', verifyUser, updateService)
serviceRouter.delete('/service/:id', verifyUser, deleteService)

export default serviceRouter