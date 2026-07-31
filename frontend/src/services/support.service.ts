import {
  createSupportTicketApi,
  getSupportTicketsApi,
} from "../api/support.api";

export const supportService = {
  async getTickets() {
    const response =
      await getSupportTicketsApi();

    return response.data;
  },

  async createTicket(
    data: {
      subject: string;
      message: string;
    }
  ) {
    const response =
      await createSupportTicketApi(data);

    return response.data;
  },
};