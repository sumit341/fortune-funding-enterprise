import { getCertificatesApi } from "../api/certificate.api";

export const certificateService = {
  async getCertificates() {
    const response =
      await getCertificatesApi();

    return response.data;
  },
};