import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

import { useAuthStore } from "../store/auth/auth.store";

interface AuthContextValue {
  initialized: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  initialized: false,
});

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <AuthContext.Provider
      value={{
        initialized: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  return useContext(AuthContext);
}