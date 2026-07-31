import { getAffiliateApi } from "../api/affiliate.api";

export const affiliateService = {
  async getAffiliate() {
    const response =
      await getAffiliateApi();

    return response.data;
  },
};