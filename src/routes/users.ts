import express from "express";
import { register } from "../services/user_services/register";
import { login } from "../services/user_services/login";
import userModel from "../models/user";
import { ExtendRequest } from "../types/ExtendRequest";
import validateJWT from "../middlewares/validateJWT";
import { ubdateUserData } from "../services/user_services/updateUserData";
import { changePassword } from "../services/user_services/changePassword";


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

router.put("/change-user-data", validateJWT, ubdateUserData )

router.put("/change-user-password", validateJWT, changePassword )




export default router;
