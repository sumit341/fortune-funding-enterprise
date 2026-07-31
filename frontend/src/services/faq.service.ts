import { getFaqApi } from "../api/faq.api";

export const faqService = {
  async getFaq() {
    const response =
      await getFaqApi();

    return response.data;
  },
};