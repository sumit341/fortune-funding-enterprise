import {
  getSettingsApi,
  updateSettingsApi,
} from "../api/settings.api";

export const settingsService = {
  async getSettings() {
    const response =
      await getSettingsApi();

    return response.data;
  },

  async updateSettings(
    data: any
  ) {
    const response =
      await updateSettingsApi(data);

    return response.data;
  },
};