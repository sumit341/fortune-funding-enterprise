import { getWalletApi } from "../api/wallet.api";

export const walletService = {
  async getWallet() {
    const response =
      await getWalletApi();

    return response.data;
  },
};