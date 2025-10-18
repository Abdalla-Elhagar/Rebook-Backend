import mongoose,{Schema,Document} from "mongoose"


export interface userTypes extends Document {
    id: string,
    name: string,
    email: string,
    phone: string,
    password: string,
}




const userSchema = new Schema <userTypes>({
    id: String,
    name: String,
    email: String,
    phone: String,
    password: String,
})

const userModel = mongoose.model<userTypes>("User", userSchema)

export default userModel