import api from "./axios";

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactApi = (
  data: ContactRequest
) =>
  api.post("/contact", data);