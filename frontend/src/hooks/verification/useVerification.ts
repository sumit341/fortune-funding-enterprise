import { useMutation } from "@tanstack/react-query";

import { verificationService } from "../../services/verification.service";

export function useVerification() {
  return useMutation({
    mutationFn:
      verificationService.verify,
  });
}