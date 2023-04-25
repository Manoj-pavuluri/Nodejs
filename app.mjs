import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import practiceRouter from './routes/practiceRouter.mjs'

let app = express()


app.use(bodyParser.json())


app.get("/",(req,res)=>{
  res.send("Hello world")
})


app.use("/",practiceRouter)

mongoose.connect("mongodb://localhost:27017/practice")

app.listen(3000,()=>{
    console.log("app is running on port 3000")
})