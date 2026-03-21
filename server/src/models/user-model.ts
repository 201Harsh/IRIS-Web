import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  tier: "FREE" | "PRO";
  verified: boolean;
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

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
