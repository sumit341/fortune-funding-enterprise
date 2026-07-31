import { getStatisticsApi } from "../api/statistics.api";

export const statisticsService = {
  async getStatistics() {
    const response = await getStatisticsApi();
    return response.data;
  },
};