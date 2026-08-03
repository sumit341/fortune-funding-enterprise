import { useAuthStore } from "../../store/auth/auth.store";

export function useCurrentUser() {
  return useAuthStore((state) => state.user);
}