import { useQuery } from "@tanstack/react-query";

import {
  challengeService,
} from "../../services/challenge.service";

export function useChallenge(
  challengeId?: string
) {
  return useQuery({
    queryKey: [
      "challenge",
      challengeId,
    ],

    queryFn: () =>
      challengeService.getChallenge(
        challengeId!
      ),

    enabled:
      !!challengeId,

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 10,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}