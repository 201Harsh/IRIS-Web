import { Router } from "express";
import { LoginUser, registerUser } from "../controllers/user.controller.js";
import { body } from "express-validator";
import ValidateData from "../middlewares/validate-middleware.js";

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

export default userRouter;
