import {
  sendContactApi,
  type ContactRequest,
} from "../api/contact.api";

export const contactService = {
  async sendMessage(
    data: ContactRequest
  ) {
    const response =
      await sendContactApi(data);

    return response.data;
  },
};