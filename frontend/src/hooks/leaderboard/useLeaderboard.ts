import { useQuery } from "@tanstack/react-query";

import { leaderboardService } from "../../services/leaderboard.service";

export function useLeaderboard() {
  return useQuery({
    queryKey: ["leaderboard"],

    queryFn:
      leaderboardService.getLeaderboard,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}