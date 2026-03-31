import mongoose, { Schema, Document } from "mongoose";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  tier: "FREE" | "PRO";
  verified: boolean;
  verifyToken?: string | null;
  verifyTokenExpiry?: Date | null;
  refreshToken?: string | null;
  hwids: string[];
  tokenVersion: number;
  createdAt: Date;
  updatedAt: Date;

  createAccessToken: () => string;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },
    tier: {
      type: String,
      enum: ["FREE", "PRO"],
      default: "FREE",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      select: false,
    },
    verifyTokenExpiry: {
      type: Date,
      select: false,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    hwids: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    tokenVersion: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.methods.createAccessToken = function () {
  const options: jwt.SignOptions = {
    expiresIn: (process.env.ACCESS_TOKEN_EXPIRY || "10m") as any,
  };
  return jwt.sign(
    { id: this._id },
    process.env.ACCESS_TOKEN_SECRET as string,
    options,
  );
};

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
