import express from 'express'
import { PracticeModel } from '../models/practiceModels.mjs'

let PracticeModels = new PracticeModel()

export class PracticeController {
    getPractice(req, res, next) {
       PracticeModels.practiceModels(req.body,res,next,(response)=>{
            res.send(response)
       })
    }
}