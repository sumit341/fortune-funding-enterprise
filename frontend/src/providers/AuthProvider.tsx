import { ReactNode, useEffect } from "react";

import { getCurrentUser } from "../api/auth.api";
import { useAuthStore } from "../store/auth.store";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const accessToken = useAuthStore(
    (state) => state.accessToken
  );

  const refreshToken = useAuthStore(
    (state) => state.refreshToken
  );

  const login = useAuthStore(
    (state) => state.login
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  useEffect(() => {
    async function restoreSession() {
      if (!accessToken) {
        return;
      }

      try {
        const response = await getCurrentUser();

        login(
          response.data.user,
          accessToken,
          refreshToken ?? ""
        );
      } catch (error) {
        console.error(error);
        logout();
      }
    }

    restoreSession();
  }, [
    accessToken,
    refreshToken,
    login,
    logout,
  ]);

  return <>{children}</>;
}