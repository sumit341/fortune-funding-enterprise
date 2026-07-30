import { getLeaderboardApi } from "../api/leaderboard.api";

export const leaderboardService = {
  async getLeaderboard() {
    const response =
      await getLeaderboardApi();

    return response.data;
  },
};