import { verifyCertificateApi } from "../api/verification.api";

export const verificationService = {
  async verify(certificateId: string) {
    const response =
      await verifyCertificateApi(
        certificateId
      );

    return response.data;
  },
};