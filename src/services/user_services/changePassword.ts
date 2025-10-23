import { Response } from "express";
import { ExtendRequest } from "../../types/ExtendRequest";
import userModel from "../../models/user";
import bcrypt from "bcrypt";

export const changePassword = async (req: ExtendRequest, res: Response) => {
  try {
    const userId = req.user?._id;
    const oldPassInDB = req.user?.password;

    const { oldPass, newPass } = req.body;

    const checkedPass = await bcrypt.compare(oldPass, oldPassInDB);

    if (!checkedPass) {
      res.status(400).json("Current password is wrong");
      return;
    }

    await userModel.findByIdAndUpdate(userId, {
      password: await bcrypt.hash(newPass, 10),
    });

    res.status(201).json("Changed user password");
  } catch (error) {
    res.status(400).json(error);
  }
};
