import api from "./axios";

export interface TradingStatistics {
  totalTrades: number;
  winRate: number;
  profitFactor: number;
  averageRR: number;
}

export const getStatisticsApi = () =>
  api.get<TradingStatistics>("/statistics");