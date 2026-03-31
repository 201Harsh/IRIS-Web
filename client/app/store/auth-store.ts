import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    accessToken: null,

    setAccessToken: (token) =>
      set((state) => {
        state.accessToken = token;
      }),

    logout: () =>
      set((state) => {
        state.accessToken = null;
      }),
  })),
);
