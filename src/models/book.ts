import mongoose, { Schema, Document } from "mongoose";

export interface bookTypes extends Document {
  id: number;
  bookName: string;
  author: string;
  description: string;
  imageUrl: string;
  category: string;
  status: string;
  owner: { type: string; ref: string; required: boolean; };
  addingDate: number;
}

const bookSchema = new Schema<bookTypes>({
  id: Number,
  bookName: String,
  author: String,
  description: String,
  imageUrl: String,
  category: String,
  status: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  addingDate: Number,
});

const bookModel = mongoose.model<bookTypes>("book", bookSchema);

export default bookModel;
