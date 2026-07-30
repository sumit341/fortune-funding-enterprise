import { useQuery } from "@tanstack/react-query";

import { dashboardService } from "../../services/dashboard.service";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],

    queryFn:
      dashboardService.getDashboard,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}