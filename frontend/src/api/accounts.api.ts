import api from "./axios";

export interface TradingAccount {
  id: string;
  accountNumber: string;
  phase: string;
  balance: number;
  equity: number;
  status: "active" | "passed" | "failed";
}

export const getAccountsApi = () =>
  api.get<TradingAccount[]>("/accounts");