import express, { Request } from "express";
import { register } from "../services/user_services/register";
import { login } from "../services/user_services/login";
import bookModel from "../models/book";
import validateJWT from "../middlewares/validateJWT";
import userModel from "../models/user";

interface ExtendRequest extends Request {
  user?: any;
}

const router = express.Router();

router.get("/", async(req,res)=> {
  const users = await userModel.find()
  res.status(200).json(users)
})

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const { data, statusCode } = await register({ name, email, phone, password });

  res.status(statusCode).json(data);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, statusCode } = await login({ email, password });

  res.status(statusCode).json(data);
});

router.get("/books", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req.user?._id;
    const userBooks = await bookModel.find({ owner: userId });

    if (!userBooks || userBooks.length === 0) {
      res.status(404).json({ message: "No books found for this user." });
      return;
    }

    res.status(200).json(userBooks);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error while fetching user books." });
  }
});

export default router;
