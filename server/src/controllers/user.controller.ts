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

    const ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!ValidEmail.test(email)) {
      return res.status(406).json({
        message: "Invalid Email Address!",
      });
    }

    const AllowedEmails: Array<any> = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "icloud.com",
      "mail.com",
      "protonmail.com",
    ];

    if (!AllowedEmails.includes(email.split("@")[1])) {
      return res.status(406).json({
        message:
          "Only standard email providers (Gmail, Outlook, etc.) are allowed.",
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
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
