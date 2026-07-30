import api from "./axios";

export interface Challenge {
  id: string;
  name: string;
  description: string;
  platform: string;
  difficulty: string;
  accountSize: string;
  price: number;
  profitTarget: number;
  maxLoss: number;
  dailyLoss: number;
  leverage: string;
}

export interface ChallengeQuery {
  page?: number;
  limit?: number;
  search?: string;
  platform?: string;
  difficulty?: string;
  accountSize?: string;
}

export interface PaginatedChallenges {
  items: Challenge[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const getChallengesApi = (
  params?: ChallengeQuery
) =>
  api.get<PaginatedChallenges>(
    "/challenges",
    {
      params,
    }
  );

export const getChallengeApi = (
  id: string
) =>
  api.get<Challenge>(
    `/challenges/${id}`
  );

export const purchaseChallengeApi = (
  challengeId: string
) =>
  api.post("/orders", {
    challengeId,
  });