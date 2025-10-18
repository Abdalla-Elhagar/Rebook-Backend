import jwt from "jsonwebtoken"

export const generateJWT = (data:any) => {
    return jwt.sign(data, process.env.JWT_SECRET!)
}