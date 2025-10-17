import jwt from "jsonwebtoken"

export const generateJWT = (data:any) => {
    return jwt.sign(data, "570d536836959bd77569a1a158f9375a24a9856ef750d1d4a6ca5d4c571dca11c44e7f1e84132f95")
}