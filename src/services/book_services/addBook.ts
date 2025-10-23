import { Response } from "express";
import { ExtendRequest } from "../../types/ExtendRequest";
import bookModel from "../../models/book";

export const addBook = async (req: ExtendRequest, res: Response) => {
  try {
    const userId = req.user?._id;

    const { bookName, author, description, category, status } = req.body;

    const addingDate = Date.now();

    const image = (req.file as Express.Multer.File).path;

    const newBook = new bookModel({
      bookName,
      author,
      description,
      imageUrl: image,
      category,
      status,
      owner: userId,
      addingDate,
    });

    await newBook.save();

    res.status(201).json({ message: "book added successgully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Error adding Book", error });
  }
};
