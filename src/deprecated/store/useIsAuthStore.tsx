import { create } from "zustand";

import { IsAuthState } from "@/types/State";

export const useIsAuthStore = create<IsAuthState>()((set) => ({
  isAuth: false,
  setIsAuth: (current) => set(() => ({ isAuth: current })),
}));
