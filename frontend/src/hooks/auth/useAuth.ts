import { useAuthStore } from "../../store/auth/auth.store";

export default function useAuth() {
  return useAuthStore();
}