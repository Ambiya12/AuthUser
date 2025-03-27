import {Router} from 'express'
import { verifyUser } from '../middlewares/verifyUser.js'

const userRouter = Router();

userRouter.get('/profile', verifyUser, getUserProfile)

export default userRouter

