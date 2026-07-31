import api from "./axios";

export interface SupportTicket {
  id: string;
  subject: string;
  status: "open" | "pending" | "closed";
}

export const getSupportTicketsApi = () =>
  api.get<SupportTicket[]>("/support");

export const createSupportTicketApi = (
  data: {
    subject: string;
    message: string;
  }
) =>
  api.post("/support", data);