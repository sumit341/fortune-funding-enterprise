import { useQuery } from "@tanstack/react-query";
import { statisticsService } from "../../services/statistics.service";

export function useStatistics() {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: statisticsService.getStatistics,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}