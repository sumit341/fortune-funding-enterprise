import api from "./axios";

export interface ProfileData {
  id: string;
  name: string;
  email: string;
  role: string;
  country: string;
  joinedAt: string;
  totalChallenges: number;
  completedChallenges: number;
}

export const getProfileApi = () =>
  api.get<ProfileData>("/users/me");

export const updateProfileApi = (
  data: Partial<ProfileData>
) =>
  api.put(
    "/users/me",
    data
  );