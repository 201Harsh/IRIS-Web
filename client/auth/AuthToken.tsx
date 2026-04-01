import { useAuthStore } from "@/app/store/auth-store";
import AxiosInstance from "@/config/AxiosInstacne";
import { useEffect } from "react";

export default function AuthInitializer() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setIsAuthInitialized = useAuthStore((s: any) => s.setIsAuthInitialized);

  useEffect(() => {
    const init = async () => {
      try {
        // 1. Grab the refresh token from Electron's localStorage
        const storedRefreshToken = localStorage.getItem("iris_cloud_token");

        // 2. If it doesn't exist, don't even bother pinging the backend.
        // Just fail silently and let the Router Gatekeeper kick them to /login.
        if (!storedRefreshToken) {
          setAccessToken(null);
          return;
        }

        const res = await AxiosInstance.post("/users/refresh-token", {
          refreshToken: storedRefreshToken,
        });

        const accessToken = res.data.accessToken;
        setAccessToken(accessToken);

        // Optional: If your backend issues a new refresh token on rotation, save it
        if (res.data.refreshToken) {
          localStorage.setItem("iris_cloud_token", res.data.refreshToken);
        }
      } catch (err) {
        console.error("Auth Initializer failed to refresh token:", err);
        // If the token is dead/expired, wipe it so the Gatekeeper locks them out
        setAccessToken(null);
        localStorage.removeItem("iris_cloud_token");
      } finally {
        // Tell Zustand we are done checking so the app can render
        if (setIsAuthInitialized) setIsAuthInitialized(true);
      }
    };

    init();
  }, [setAccessToken, setIsAuthInitialized]);

  return null;
}
