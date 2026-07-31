import api from "./axios";

export interface AnalyticsData {
  totalPnL: number;
  maxDrawdown: number;
  expectancy: number;
  consistencyScore: number;
}

export const getAnalyticsApi = () =>
  api.get<AnalyticsData>("/analytics");