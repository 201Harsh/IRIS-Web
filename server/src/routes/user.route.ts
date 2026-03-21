import { Router } from "express";
import {
  GetUser,
  LoginUser,
  LogoutUser,
  registerUser,
  VerifyEmail,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import ValidateData from "../middlewares/validate-middleware.js";
import { AuthMiddleware } from "../middlewares/auth-middleware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email address"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  ValidateData,
  registerUser,
);

userRouter.post(
  "/verify",
  [
    body("token")
      .notEmpty()
      .withMessage("Verification token is required")
      .isString()
      .withMessage("Verification token must be a string"),
  ],
  ValidateData,
  VerifyEmail,
);

userRouter.post(
  "/login",
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email address"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  ValidateData,
  LoginUser,
);

userRouter.get("/me", AuthMiddleware, GetUser);

userRouter.post("/logout", AuthMiddleware, LogoutUser);

export default userRouter;
