import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { orderService } from "../../services/order.service";

export function useCreateOrder() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      orderService.createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
}