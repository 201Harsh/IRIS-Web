import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  tier: "FREE" | "PRO";
  verified: boolean;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
  hwids: string[];
  tokenVersion: number;
  createdAt: Date;
  updatedAt: Date;
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

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
