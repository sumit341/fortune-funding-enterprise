import {
  getPayoutsApi,
  createPayoutApi,
} from "../api/payouts.api";

export const payoutsService = {
  async getPayouts() {
    const response =
      await getPayoutsApi();

    return response.data;
  },

  async createPayout(
    amount: number
  ) {
    const response =
      await createPayoutApi(amount);

    return response.data;
  },
};