import api from "./axios";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "system" | "challenge" | "payment";
  read: boolean;
  createdAt: string;
}

export const getNotificationsApi = () =>
  api.get<Notification[]>("/notifications");