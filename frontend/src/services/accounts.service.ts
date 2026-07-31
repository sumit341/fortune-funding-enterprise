import { getAccountsApi } from "../api/accounts.api";

export const accountsService = {
  async getAccounts() {
    const response = await getAccountsApi();
    return response.data;
  },
};