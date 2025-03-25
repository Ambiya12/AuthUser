import {Router} from 'express'
import { createService, getAllServices } from '../controllers/serviceController.js'
import { verifyUser } from '../middlewares/verifyUser.js'

const serviceRouter = Router()

serviceRouter.get('/service', getAllServices)
serviceRouter.post('/service', verifyUser, createService)

export default serviceRouter