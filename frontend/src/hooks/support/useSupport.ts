import { useQuery } from "@tanstack/react-query";

import { supportService } from "../../services/support.service";

export function useSupport() {
  return useQuery({
    queryKey: ["support"],

    queryFn:
      supportService.getTickets,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}