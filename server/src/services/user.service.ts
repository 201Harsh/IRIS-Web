import UserModel from "../models/user-model.js";
import { hashSecureData } from "../utils/user-utils.js";
import crypto from "crypto";

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
  const verifyToken = crypto.randomBytes(32).toString("hex");
  const verifyTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);

  const newUser = UserModel.create({
    name,
    email,
    password: hashedPassword,
    verifyToken,
    verifyTokenExpiry,
  });

  return newUser;
};
