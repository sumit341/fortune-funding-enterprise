import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (user: User, token: string) => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  token: localStorage.getItem("token"),

  isAuthenticated: !!localStorage.getItem("token"),

  isLoading: true,

  login: (user, token) => {
    localStorage.setItem("token", token);

    set({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  setUser: (user) => {
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  setLoading: (loading) => {
    set({
      isLoading: loading,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
}));