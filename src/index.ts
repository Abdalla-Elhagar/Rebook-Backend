import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRouter from "./routes/users"
import userBooksRouter from "./routes/userBooks"
import dotenv from "dotenv";
import { seedInitialBooks } from "./services/book_services/seedInitialBooks";
import booksRouter from "./routes/books"
dotenv.config();



const app = express()

const PORT = process.env.PORT || 8000
const USER_NAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD

app.use(cors({
  origin: ["http://localhost:5173","https://re-book-black.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json())

mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@maincluster.9dt5hr9.mongodb.net/rebook?retryWrites=true&w=majority&appName=mainCluster`)
.then(()=> console.log("connected with DB"))
.catch((error)=>{"connected with DB has been error: " + error})

app.use("/users", userRouter)
app.use("/books", booksRouter)
app.use("/user-books", userBooksRouter)

seedInitialBooks()

app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`)
})