import { User } from "../models/userModel.js";

export const getAllUsers= async (req, res)=>{
    try {
        const user=await User.find();
        res.status(200).json(user)
    } catch (error) {
        console.log('An error occured', error);
        res.status(500).json({message:'An error occured'})
    }
}