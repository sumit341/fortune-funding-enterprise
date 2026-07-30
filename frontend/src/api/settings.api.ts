import api from "./axios";

export interface SettingsData {
  language: string;
  theme: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export const getSettingsApi = () =>
  api.get<SettingsData>("/settings");

export const updateSettingsApi = (
  data: Partial<SettingsData>
) =>
  api.put(
    "/settings",
    data
  );