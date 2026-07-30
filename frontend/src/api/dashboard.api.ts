import api from "./axios";

export interface DashboardData {
  balance: number;
  equity: number;
  profit: number;
  profitTarget: number;
  dailyDrawdown: number;
  maxDrawdown: number;
  tradingDays: number;
  winRate: number;
}

export const getDashboardApi = () =>
  api.get<DashboardData>("/dashboard");