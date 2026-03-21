import jwt from "jsonwebtoken";
import { Response } from "express";
import { Types } from "mongoose";
import bcrypt from "bcrypt";

// Ensure you have these in your .env file
const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

// 12 rounds is the industry standard. It makes brute-forcing mathematically unfeasible.
const SALT_ROUNDS = 12;

// --- JWT TOKEN MANAGEMENT ---

export const generateTokens = (
  userId: Types.ObjectId | string,
  tokenVersion: number,
) => {
  // 15-minute lifespan for active requests
  const accessToken = jwt.sign(
    { id: userId, version: tokenVersion },
    ACCESS_SECRET,
    { expiresIn: "15m" },
  );

  // 30-day lifespan for silent background refreshing
  const refreshToken = jwt.sign(
    { id: userId, version: tokenVersion },
    REFRESH_SECRET,
    { expiresIn: "30d" },
  );

  return { accessToken, refreshToken };
};

export const setRefreshCookie = (res: Response, refreshToken: string) => {
  res.cookie("iris_refresh", refreshToken, {
    httpOnly: true, // Prevents XSS attacks (JS cannot read it)
    secure: process.env.NODE_ENV === "production", // Requires HTTPS in production
    sameSite: "strict", // Prevents CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days in milliseconds
  });
};

export const clearRefreshCookie = (res: Response) => {
  res.clearCookie("iris_refresh", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

// --- BCRYPT CRYPTOGRAPHY ---

/**
 * Hashes raw data (like a 6-digit OTP or a PIN) before saving to MongoDB.
 */
export const hashSecureData = async (rawData: string) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(rawData, salt);
};

/**
 * Compares user input (like the OTP they typed) against the encrypted database hash.
 */
export const verifySecureData = async (
  rawData: string,
  hashedData: string,
): Promise<boolean> => {
  return bcrypt.compare(rawData, hashedData);
};
