import { useMutation } from "@tanstack/react-query";

import { AuthService } from "../services/auth.service";

export default function useRegister() {
  return useMutation({
    mutationFn: AuthService.register,
  });
}