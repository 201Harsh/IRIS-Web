import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  tier: "FREE" | "PRO";
  hwids: string[];
  tokenVersion: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
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
    },
    tier: {
      type: String,
      enum: ["FREE", "PRO"],
      default: "FREE",
    },
    // This array  the Motherboard/CPU IDs. Max length will be 5.
    hwids: [
      {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
    ],
    // If user clicks 'Logout All', we increment this number. All old tokens die instantly.
    tokenVersion: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model<IUser>("User", UserSchema);
