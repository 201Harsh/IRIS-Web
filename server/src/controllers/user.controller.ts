import { Request, Response } from "express";
import UserModel from "../models/user-model.js";
import { CreateUserService } from "../services/user.service.js";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "All fields are required and must be strings",
      });
    }

    const ifUser = await UserModel.findOne({ email });

    if (ifUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await CreateUserService({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not created",
      });
    }

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
