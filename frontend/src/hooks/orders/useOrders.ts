import { useQuery } from "@tanstack/react-query";

import { orderService } from "../../services/order.service";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],

    queryFn:
      orderService.getOrders,

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 10,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}