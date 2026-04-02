import crypto from "crypto";

export const generateVerifyToken = () => {
  const verifyToken = crypto.randomBytes(32).toString("hex");
  const verifyTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return { verifyToken, verifyTokenExpiry };
};
