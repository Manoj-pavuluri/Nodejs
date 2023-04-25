import express from 'express'
import { PracticeModel } from '../models/practiceModels.mjs'

let PracticeModels = new PracticeModel()

export class PracticeController {
    getPractice(req, res, next) {
       PracticeModels.getpracticeModels(req,res,next,(response)=>{
            res.send(response)
       })
    }
    getByIdPractice(req, res, next) {
        PracticeModels.getByIdpracticeModels(req,res,next,(response)=>{
             res.send(response)
        })
     }
    postPractice(req, res, next) {
        PracticeModels.postpracticeModels(req.body,res,next,(response)=>{
             res.send(response)
        })
     }
     putPractice(req, res, next) {
        PracticeModels.putpracticeModels(req,res,next,(response)=>{
             res.send(response)
        })
     }
     deletePractice(req, res, next) {
        PracticeModels.deletepracticeModels(req,res,next,(response)=>{
             res.send(response)
        })
     }
}