import { ReactNode, useEffect } from "react";

import { getCurrentUser } from "../api/auth.api";
import { useAuthStore } from "../store/auth.store";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const token = useAuthStore((state) => state.token);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        logout();
        return;
      }

      try {
        const response = await getCurrentUser();

        setUser(response.data.user);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, [token, setUser, logout, setLoading]);

  return children;
}