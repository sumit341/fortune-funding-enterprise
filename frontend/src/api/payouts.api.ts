import api from "./axios";

export interface PayoutRequest {
  id: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  requestedAt: string;
}

export const getPayoutsApi = () =>
  api.get<PayoutRequest[]>("/payouts");

export const createPayoutApi = (
  amount: number
) =>
  api.post("/payouts", {
    amount,
  });