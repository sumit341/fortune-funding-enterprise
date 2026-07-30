import api from "./axios";

export interface ChallengeDetails {
  id: string;
  name: string;
  description: string;

  platform: string;

  difficulty: string;

  accountSize: string;

  price: number;

  leverage: string;

  profitTarget: number;

  dailyLoss: number;

  maxLoss: number;

  refundableFee: boolean;

  phases: number;

  rules: string[];

  features: string[];
}

export const getChallengeDetailsApi = (
  challengeId: string
) =>
  api.get<ChallengeDetails>(
    `/challenges/${challengeId}`
  );