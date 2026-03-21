import { Request, Response } from "express";
import UserModel from "../models/user-model.js";
import { CreateUserService } from "../services/user.service.js";
import {
  clearRefreshCookie,
  generateTokens,
  setRefreshCookie,
  verifySecureData,
} from "../utils/user-utils.js";

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
      user: {
        name: user.name,
        email: user.email,
        tier: user.tier,
        verified: user.verified,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const VerifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token || typeof token !== "string") {
      return res
        .status(400)
        .json({ message: "Verification token is required." });
    }

    const user = await UserModel.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message:
          "Invalid or expired verification token. Please register again.",
      });
    }

    user.verified = true;

    user.verifyToken = null;
    user.verifyTokenExpiry = null;

    const tokens = generateTokens(user._id, user.tokenVersion);
    setRefreshCookie(res, tokens.refreshToken);

    await user.save();

    return res.status(200).json({
      message: "Email verified successfully. You are now logged in.",
      user: {
        name: user.name,
        email: user.email,
        tier: user.tier,
        verified: user.verified,
      },
      accessToken: tokens.accessToken,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal Server Error during verification.",
    });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (
      !email ||
      !password ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "All fields are required and must be strings",
      });
    }

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!user.verified) {
      return res.status(401).json({
        message: "Verify your email to login!",
      });
    }

    const isPasswordValid = await verifySecureData(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = generateTokens(user._id, user.tokenVersion);
    setRefreshCookie(res, token.refreshToken);

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        tier: user.tier,
        verified: user.verified,
      },
      token,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetUser = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user: {
        name: user.name,
        email: user.email,
        tier: user.tier,
        verified: user.verified,
        hwids: user.hwids,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const LogoutUser = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    clearRefreshCookie(res);

    return res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const LogoutAllusers = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.tokenVersion += 1;
    user.hwids = [];

    await user.save();

    clearRefreshCookie(res);

    return res.status(200).json({
      message: "Security Alert: All devices have been logged out.",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
