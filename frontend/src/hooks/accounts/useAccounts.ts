import { useQuery } from "@tanstack/react-query";

import { accountsService } from "../../services/accounts.service";

export function useAccounts() {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: accountsService.getAccounts,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}