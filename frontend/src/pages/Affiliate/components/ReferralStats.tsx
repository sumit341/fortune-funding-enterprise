import type { AffiliateData } from "../../../api/affiliate.api";

import ReferralCard from "./ReferralCard";

interface Props {
  data: AffiliateData;
}

export default function ReferralStats({
  data,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <ReferralCard
        title="Total Referrals"
        value={data.totalReferrals}
      />

      <ReferralCard
        title="Total Earnings"
        value={`$${data.totalEarnings}`}
      />

      <ReferralCard
        title="Pending"
        value={`$${data.pendingEarnings}`}
      />

    </div>
  );
}