import { useMutation } from "@tanstack/react-query";

import { AuthService } from "../services/auth.service";

export default function useLogin() {
  return useMutation({
    mutationFn: AuthService.login,
  });
}