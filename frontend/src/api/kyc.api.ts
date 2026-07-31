import api from "./axios";

export interface KycData {
  status: "pending" | "approved" | "rejected";

  fullName: string;

  documentType: string;

  submittedAt: string;
}

export const getKycApi = () =>
  api.get<KycData>("/kyc");

export const submitKycApi = (
  formData: FormData
) =>
  api.post(
    "/kyc",
    formData
  );