import express from 'express'
import {PracticeController} from '../controller/practiceController.mjs'

let router = express.Router()

let practiceControllers = new PracticeController()



router.post('/practice',practiceControllers.getPractice)


export default router