import { useAffiliate } from "../../hooks/affiliate/useAffiliate";

import AffiliateSkeleton from "./components/AffiliateSkeleton";
import ReferralStats from "./components/ReferralStats";
import ReferralLink from "./components/ReferralLink";
import ReferralTable from "./components/ReferralTable";
import PayoutHistory from "./components/PayoutHistory";

export default function Affiliate() {
  const {
    data,
    isLoading,
  } = useAffiliate();

  if (isLoading || !data) {
    return <AffiliateSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <ReferralStats
        data={data}
      />

      <ReferralLink
        link={data.referralLink}
      />

      <ReferralTable />

      <PayoutHistory />

    </main>
  );
}