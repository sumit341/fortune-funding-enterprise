import {
  getKycApi,
  submitKycApi,
} from "../api/kyc.api";

export const kycService = {
  async getKyc() {
    const response =
      await getKycApi();

    return response.data;
  },

  async submitKyc(
    formData: FormData
  ) {
    const response =
      await submitKycApi(
        formData
      );

    return response.data;
  },
};