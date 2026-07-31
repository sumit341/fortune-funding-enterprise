import { useQuery } from "@tanstack/react-query";

import { affiliateService } from "../../services/affiliate.service";

export function useAffiliate() {
  return useQuery({
    queryKey: ["affiliate"],

    queryFn:
      affiliateService.getAffiliate,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}