"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/app/store/auth-store";
import AxiosInstance from "@/config/AxiosInstacne";

export default function AuthInitializer() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setIsAuthInitialized = useAuthStore((s) => s.setIsAuthInitialized);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await AxiosInstance.post("/users/refresh-token");

        const accessToken = res.data.accessToken;

        setAccessToken(accessToken);
      } catch (err) {
        // refresh failed → user not logged in
        setAccessToken(null);
      } finally {
        // 🔥 mark auth as initialized (VERY IMPORTANT)
        setIsAuthInitialized(true);
      }
    };

    init();
  }, [setAccessToken, setIsAuthInitialized]);

  return null;
}
