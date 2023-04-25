import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});


export let PracticeSchema = mongoose.model('practice1',schema)