import api from "./axios";

export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  country: string;
  profit: number;
  winRate: number;
}

export const getLeaderboardApi = () =>
  api.get<LeaderboardUser[]>("/leaderboard");