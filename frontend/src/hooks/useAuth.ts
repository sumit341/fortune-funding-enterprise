import { useEffect } from "react";

import { useAuthStore } from "../store/auth.store";

export default function useAuth() {
  const {
    user,
    token,
    isAuthenticated,
    logout,
  } = useAuthStore();

  useEffect(() => {
    if (!token) {
      logout();
    }
  }, [token, logout]);

  return {
    user,
    token,
    isAuthenticated,
  };
}