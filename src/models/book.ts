import mongoose,{Schema,Document} from "mongoose"

export interface bookTypes extends Document {
    id: number,
    bookName: string,
    author: string,
    description: string,
    imageUrl: string,
    category: string,
    owner: number,
    addingDate: number,
}

const bookSchema = new Schema<bookTypes>({
    id: Number,
    bookName: String,
    author: String,
    description: String,
    imageUrl: String,
    category: String,
    owner: Number,
    addingDate: Number,
})




const bookModel = mongoose.model<bookTypes>("book", bookSchema)

export default bookModel