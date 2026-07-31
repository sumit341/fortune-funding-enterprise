import { getAnalyticsApi } from "../api/analytics.api";

export const analyticsService = {
  async getAnalytics() {
    const response = await getAnalyticsApi();
    return response.data;
  },
};