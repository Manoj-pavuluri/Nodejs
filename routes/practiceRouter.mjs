import express from 'express'
import {PracticeController} from '../controller/practiceController.mjs'

let router = express.Router()

let practiceControllers = new PracticeController()


console.log(router)


router.post('/practice',practiceControllers.postPractice)
router.get('/practice',practiceControllers.getPractice)
router.get('/practice/:id',practiceControllers.getByIdPractice)
router.put('/practice/:id',practiceControllers.putPractice)
router.delete('/practice/:id',practiceControllers.deletePractice)


export default router