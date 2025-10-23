import { Response } from "express";
import { ExtendRequest } from "../../types/ExtendRequest";
import userModel from "../../models/user";



export const ubdateUserData = async (req:ExtendRequest , res:Response) => {
    try {
        const userId = req.user?._id
    const { name, phone } = req.body;

    await userModel.findByIdAndUpdate( userId, { name, phone })

    res.status(201).json("The user data changed")
    }
    catch(error) {
        res.json(error)
    }
    
}