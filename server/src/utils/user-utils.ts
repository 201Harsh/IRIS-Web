import jwt from "jsonwebtoken";
import { Response } from "express";
import { Types } from "mongoose";
import bcrypt from "bcrypt";

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET as string;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY as any;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY as any;

const SALT_ROUNDS = 12;

export const generateTokens = (
  userId: Types.ObjectId | string,
  tokenVersion: number,
) => {
  const accessToken = jwt.sign(
    { id: userId, version: tokenVersion },
    ACCESS_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY },
  );

  const refreshToken = jwt.sign(
    { id: userId, version: tokenVersion },
    REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY },
  );

  return { accessToken, refreshToken };
};

export const setRefreshCookie = (res: Response, refreshToken: string) => {
  res.cookie("iris_refresh", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export const clearRefreshCookie = (res: Response) => {
  res.clearCookie("iris_refresh", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const hashSecureData = async (rawData: string) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(rawData, salt);
};

export const verifySecureData = async (
  rawData: string,
  hashedData: string,
): Promise<boolean> => {
  return bcrypt.compare(rawData, hashedData);
};
