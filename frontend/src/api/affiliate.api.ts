import api from "./axios";

export interface AffiliateData {
  referralCode: string;
  referralLink: string;
  totalReferrals: number;
  totalEarnings: number;
  pendingEarnings: number;
}

export const getAffiliateApi = () =>
  api.get<AffiliateData>("/affiliate");