import express from 'express'
import {PracticeSchema} from '../schemas/practiceSchema.mjs'



export class PracticeModel{
   async postpracticeModels(req,res){
        let practice = await PracticeSchema.create(req)
        res.send(practice)
    }
    async getpracticeModels(req,res){
        let practice = await PracticeSchema.find({})
       res.send(practice)
    }
    async getByIdpracticeModels(req,res){
        let practice = await PracticeSchema.findOne({"_id":req.params.id})
       res.send(practice)
    }

    async putpracticeModels(req,res){
        await PracticeSchema.updateOne({"_id":req.params.id},req.body)
        res.send(req.body)
    }
    async deletepracticeModels(req,res){
        let practice = await PracticeSchema.findOneAndRemove({"_id":req.params.id})
        res.json({message:"successfully deleted"})
    }
}