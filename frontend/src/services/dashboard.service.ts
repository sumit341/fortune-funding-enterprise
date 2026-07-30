import { getDashboardApi } from "../api/dashboard.api";

export const dashboardService = {
  async getDashboard() {
    const response =
      await getDashboardApi();

    return response.data;
  },
};