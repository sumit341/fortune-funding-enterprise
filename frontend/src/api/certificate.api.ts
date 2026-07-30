import api from "./axios";

export interface Certificate {
  id: string;
  challengeName: string;
  traderName: string;
  issuedAt: string;
  downloadUrl: string;
}

export const getCertificatesApi = () =>
  api.get<Certificate[]>("/certificates");