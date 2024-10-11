import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'


configDotenv()
const uri=process.env.MONGO_URI

const connectDB= async ()=>{
    try {
       await mongoose.connect(uri)
       console.log("connected to db")
    } catch (error) {
        console.log('Unable to connect',error)
        process.exit(1)
    }
}

export default connectDB;