import express from "express";
import { register } from "../services/user_services/register";
import { login } from "../services/user_services/login";
import userModel from "../models/user";
import { ExtendRequest } from "../types/ExtendRequest";


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

router.post("/login", async (req:ExtendRequest, res) => {
  const { email, password } = req.body;

  const { data, statusCode } = await login({ email, password });

  res.status(statusCode).json(data);
});



export default router;
