import crypto from "crypto";

export const generateDesktopToken = () => {
  const desktopToken = crypto.randomBytes(32).toString("hex");
  const desktopTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);

  return { desktopToken, desktopTokenExpiry };
};
