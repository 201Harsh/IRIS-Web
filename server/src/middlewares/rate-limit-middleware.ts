import rateLimit from "express-rate-limit";

export const GlobalLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 15,
  message: "Too many requests, please try again after 1 minutes 🚦",
});

export const registerLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  message:
    "Too many registration attempts, please try again after 1 minutes 🛑",
});

export const verifyLimit = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 3,
  message:
    "Too many verification attempts, please try again after 2 minutes 🔐",
});

export const loginLimit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: "Too many login attempts, please try again after 5 minutes ⚠️",
});
