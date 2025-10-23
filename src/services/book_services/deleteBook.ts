import { Response } from "express";
import { ExtendRequest } from "../../types/ExtendRequest";
import bookModel from "../../models/book";




export const deleteBook = async ( req: ExtendRequest, res: Response ) => {

    try{
       const bookId = req.body._id

    await bookModel.findByIdAndDelete(bookId)

    res.status(200).json("Deleted the book") 
    }
    catch(error) {
        res.send(error)
    }
    
}