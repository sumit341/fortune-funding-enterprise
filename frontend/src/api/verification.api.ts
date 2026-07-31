import api from "./axios";

export interface CertificateVerification {
  certificateId: string;
  traderName: string;
  challenge: string;
  issuedAt: string;
  status: "verified" | "invalid";
}

export const verifyCertificateApi = (
  certificateId: string
) =>
  api.get<CertificateVerification>(
    `/verification/${certificateId}`
  );