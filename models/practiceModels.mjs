import express from 'express'
import {PracticeSchema} from '../schemas/practiceSchema.mjs'



export class PracticeModel{
   async practiceModels(req,res){
        let practice = await PracticeSchema.create(req)
            console.log(practice)
       res.send(practice)
      // console.log(practice)


    }
}