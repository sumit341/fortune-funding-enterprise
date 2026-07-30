import {
  ChallengeQuery,
  getChallengeApi,
  getChallengesApi,
  purchaseChallengeApi,
} from "../api/challenge.api";

export const challengeService = {
  async getChallenges(
    params?: ChallengeQuery
  ) {
    const response =
      await getChallengesApi(
        params
      );

    return response.data;
  },

  async getChallenge(
    id: string
  ) {
    const response =
      await getChallengeApi(id);

    return response.data;
  },

  async purchaseChallenge(
    challengeId: string
  ) {
    const response =
      await purchaseChallengeApi(
        challengeId
      );

    return response.data;
  },
};