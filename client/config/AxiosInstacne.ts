import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useAuthStore } from "@/app/store/auth-store";

// 🔹 Extend Axios config to include _retry
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

// 🔹 Queue type
type QueueItem = {
  resolve: (token: string) => void;
  reject: (err: any) => void;
};

// 🔹 Axios instance
const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true, // required for cookies
});

// 🔹 Attach access token
AxiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// 🔹 Refresh handling
let isRefreshing = false;
let queue: QueueItem[] = [];

// 🔹 Process queued requests
const processQueue = (error: any, token: string | null = null) => {
  queue.forEach((prom) => {
    if (error || !token) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  queue = [];
};

// 🔹 Response interceptor
AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      !originalRequest?._retry &&
      !originalRequest?.url?.includes("/refresh-token")
    ) {
      // 🔁 If already refreshing → queue requests
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queue.push({
            resolve: (token: string) => {
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(AxiosInstance(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // 🔥 Refresh token (cookie auto sent)
        const res = await AxiosInstance.post("/users/refresh-token");

        const newAccessToken = (res.data as any).accessToken;

        // 🔹 Update Zustand
        useAuthStore.getState().setAccessToken(newAccessToken);

        // 🔹 Retry queued requests
        processQueue(null, newAccessToken);

        // 🔹 Retry original request
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return AxiosInstance(originalRequest);
      } catch (err) {
        // 🔹 Reject all queued requests
        processQueue(err, null);

        // 🔹 Clear auth state
        useAuthStore.getState().logout();

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default AxiosInstance;
