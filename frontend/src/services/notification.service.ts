import { getNotificationsApi } from "../api/notification.api";

export const notificationService = {
  async getNotifications() {
    const response =
      await getNotificationsApi();

    return response.data;
  },
};