import { useQuery } from "@tanstack/react-query";

import {
  ChallengeQuery,
} from "../../api/challenge.api";

import {
  challengeService,
} from "../../services/challenge.service";

export function useChallenges(
  params?: ChallengeQuery
) {
  return useQuery({
    queryKey: [
      "challenges",
      params,
    ],

    queryFn: () =>
      challengeService.getChallenges(
        params
      ),

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 10,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}