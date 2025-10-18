import express from "express";
import { register } from "../services/user_services/register";
import { login } from "../services/user_services/login";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const { data, statusCode } = await register({ name, email, phone, password });

  res.status(statusCode).json(data);
});

router.post("/login" , async ( req, res )=> {
    const { email, password } = req.body;

    const { data, statusCode } = await login({ email , password });

    res.status(statusCode).json(data);
})


export default router;
