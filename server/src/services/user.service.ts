import UserModel from "../models/user-model.js";
import { generateVerifyToken } from "../utils/auth-utils.js";
import { hashSecureData } from "../utils/user-utils.js";

export const CreateUserService = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await UserModel.findOne({ email });

  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashSecureData(password);

  const verfiytokens = generateVerifyToken();

  const newUser = UserModel.create({
    name,
    email,
    password: hashedPassword,
    verifyToken: verfiytokens.verifyToken,
    verifyTokenExpiry: verfiytokens.verifyTokenExpiry,
  });

  return newUser;
};
