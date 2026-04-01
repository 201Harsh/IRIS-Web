import crypto from "crypto";

export const generateDesktopToken = () => {
  const desktopToken = crypto.randomBytes(32).toString("hex");

  return desktopToken;
};
