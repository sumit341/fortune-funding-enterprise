import api from "./axios";

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const getFaqApi = () =>
  api.get<FaqItem[]>("/faq");