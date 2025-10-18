import { Router } from "express";
import { getAllBooks } from "../services/book_services/seedInitialBooks";

const router = Router()




router.get("/", async (req,res)=> {
    const books = await getAllBooks();
    res.status(200).json(books)
})









export default router