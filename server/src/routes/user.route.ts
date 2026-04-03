import { Router } from "express";
import {
  GetUser,
  LoginUser,
  LogoutAllusers,
  LogoutUser,
  RefreshAccessToken,
  RegisterAndLoginUsingGoogle,
  registerUser,
  VerifyEmail,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import ValidateData from "../middlewares/validate-middleware.js";
import { AuthMiddleware } from "../middlewares/auth-middleware.js";
import passport from "../lib/passport.js";
import {
  GlobalLimit,
  loginLimit,
  RefreshTokenLimit,
  registerLimit,
  verifyLimit,
} from "../middlewares/rate-limit-middleware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  registerLimit,
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

userRouter.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent",
  }),
);

userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/signup?error=AuthFailed",
  }),
  RegisterAndLoginUsingGoogle,
);

userRouter.post(
  "/verify",
  verifyLimit,
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
  loginLimit,
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

userRouter.get("/me", GlobalLimit, AuthMiddleware, GetUser);

userRouter.post("/logout", AuthMiddleware, LogoutUser);

userRouter.post("/logout-all", AuthMiddleware, LogoutAllusers);

userRouter.post("/refresh-token", RefreshTokenLimit, RefreshAccessToken);

export default userRouter;
