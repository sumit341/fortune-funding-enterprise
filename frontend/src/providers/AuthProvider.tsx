import { ReactNode, useEffect } from "react";

import { useCurrentUser } from "../hooks/auth/useCurrentUser";
import { useAuthStore } from "../store/auth.store";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const {
    data,
    isSuccess,
    isError,
    isLoading,
  } = useCurrentUser();

  const {
    setUser,
    logout,
    setLoading,
  } = useAuthStore();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
      return;
    }

    if (isSuccess) {
      setUser(data);
      setLoading(false);
      return;
    }

    if (isError) {
      logout();
    }
  }, [
    data,
    isSuccess,
    isError,
    isLoading,
    logout,
    setLoading,
    setUser,
  ]);

  return <>{children}</>;
}