import {
  getProfileApi,
  updateProfileApi,
} from "../api/profile.api";

export const profileService = {
  async getProfile() {
    const response =
      await getProfileApi();

    return response.data;
  },

  async updateProfile(
    data: any
  ) {
    const response =
      await updateProfileApi(data);

    return response.data;
  },
};