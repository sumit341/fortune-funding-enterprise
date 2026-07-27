import { ReactNode, useEffect } from "react";

import { useAuthStore } from "../store/auth.store";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!token) {
      logout();
    }
  }, [token, logout]);

  return children;
}