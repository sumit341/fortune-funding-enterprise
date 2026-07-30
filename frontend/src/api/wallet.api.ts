import api from "./axios";

export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  status: "pending" | "completed" | "failed";
  createdAt: string;
}

export interface WalletData {
  balance: number;
  available: number;
  pending: number;
  transactions: Transaction[];
}

export const getWalletApi = () =>
  api.get<WalletData>("/wallet");