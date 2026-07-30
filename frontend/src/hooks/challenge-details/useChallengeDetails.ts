import { useQuery } from "@tanstack/react-query";

import { challengeDetailsService } from "../../services/challenge-details.service";

export function useChallengeDetails(
  challengeId?: string
) {
  return useQuery({
    queryKey: [
      "challenge-details",
      challengeId,
    ],

    queryFn: () =>
      challengeDetailsService.getChallengeDetails(
        challengeId!
      ),

    enabled: !!challengeId,

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 10,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}