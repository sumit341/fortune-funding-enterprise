import {
  getChallengeDetailsApi,
} from "../api/challenge-details.api";

export const challengeDetailsService = {
  async getChallengeDetails(
    challengeId: string
  ) {
    const response =
      await getChallengeDetailsApi(
        challengeId
      );

    return response.data;
  },
};