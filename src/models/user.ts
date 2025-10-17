import mongoose,{Schema,Document} from "mongoose"

export interface bookTypes extends Document {
    id: number,
    bookName: string,
    author: string,
    description: string,
    imageUrl: string,
    category: string,
}

export interface userTypes extends Document {
    id: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    books: bookTypes[],
}



const bookSchema = new Schema<bookTypes>({
    id: Number,
    bookName: String,
    author: String,
    description: String,
    imageUrl: String,
    category: String,
})

const userSchema = new Schema <userTypes>({
    id: Number,
    name: String,
    email: String,
    phone: String,
    password: String,
    books: [bookSchema],
})

const userModel = mongoose.model<userTypes>("User", userSchema)

export default userModel