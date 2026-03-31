"use client";

import { useEffect } from "react";
import axios from "axios";
import { useAuthStore } from "@/app/store/auth-store";

export default function AuthInitializer() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/users/refresh-token",
          {},
          { withCredentials: true },
        );

        setAccessToken(res.data.accessToken);
      } catch {
        setAccessToken(null);
      }
    };

    init();
  }, []);

  return null; // no UI
}
