import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import { payoutsService } from "../../services/payouts.service";

export function usePayouts() {
  const payouts = useQuery({
    queryKey: ["payouts"],
    queryFn:
      payoutsService.getPayouts,
  });

  const create =
    useMutation({
      mutationFn:
        payoutsService.createPayout,
    });

  return {
    payouts,
    create,
  };
}