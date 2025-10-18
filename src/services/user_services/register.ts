import userModel from "../../models/user";
import bcrypt from "bcrypt";
import { generateJWT } from "../../utils/generateJWT";

interface registerParams {
    name: string,
    email: string,
    phone: string,
    password: string,
}

export const register = async ({
  name,
  email,
  phone,
  password,
}: registerParams) => {
  const user = await userModel.findOne({ email });

  if (user) {
    return { data: "user already exists!", statusCode: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    name,
    email,
    password: hashedPassword,
    phone,
  });
  await newUser.save();

  return { data: generateJWT({ email, name, phone }) , statusCode: 200 };
};
