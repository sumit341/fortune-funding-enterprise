import { useQuery } from "@tanstack/react-query";

import { kycService } from "../../services/kyc.service";

export function useKyc() {
  return useQuery({
    queryKey: ["kyc"],

    queryFn:
      kycService.getKyc,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}