import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user";


interface ExtendRequest extends Request {
    user?: any
}


const validateJWT = ( req:ExtendRequest, res: Response, next: NextFunction )=> {
    const authorizationHeader = req.get("authorization")

    if(!authorizationHeader) {
        res.status(403).send("Authorization header was not provided")
        return
    }

    const token = authorizationHeader.split(" ")[1];

    if(!token) {
        res.status(403).send("Bearer token not found")
        return
    }

    jwt.verify(token, '570d536836959bd77569a1a158f9375a24a9856ef750d1d4a6ca5d4c571dca11c44e7f1e84132f95', async (err,payload) => {
        if(err) {
            res.status(403).send("Invalid token")
            return
        }

        if(!payload) {
            res.status(403).send("Invalid token payload")
            return
        }

        const userPayload = payload as {
            email: string,
            name: string,
            phone: string,
        }

        const user = await userModel.findOne({email: userPayload.email}) 

        req.user = user

        next()
    })
} 

export default validateJWT;