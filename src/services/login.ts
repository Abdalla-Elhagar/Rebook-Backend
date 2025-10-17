import userModel from "../models/user"
import bcrypt from 'bcrypt';
import { generateJWT } from "../utils/generateJWT";

interface loginParams {
    email: string,
    password: string,
}

export const login = async ({email,password} : loginParams)=> {

    const findUser = await userModel.findOne({email})

    if(!findUser) {
        return { data:"Email or password has been error", statusCode: 400 }
    }

    const checkedPass = await bcrypt.compare(password, findUser.password)

    if(checkedPass) {
        return {data: generateJWT({ email, name: findUser.name, phone: findUser.phone }) , statusCode: 200}
    }

    return {data: "Email or password has been error" , statusCode: 400}
}