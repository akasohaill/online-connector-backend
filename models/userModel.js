import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:String,
    socialMediaHandle:String,
    image:[String]
})

export const User= mongoose.model('User',userSchema);