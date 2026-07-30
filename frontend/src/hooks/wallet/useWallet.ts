import { useQuery } from "@tanstack/react-query";

import { walletService } from "../../services/wallet.service";

export function useWallet() {
  return useQuery({
    queryKey: ["wallet"],

    queryFn:
      walletService.getWallet,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}