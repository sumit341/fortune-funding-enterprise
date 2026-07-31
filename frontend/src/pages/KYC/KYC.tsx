import { useKyc } from "../../hooks/kyc/useKyc";

import KycSkeleton from "./components/KycSkeleton";
import KycStatus from "./components/KycStatus";
import KycForm from "./components/KycForm";
import KycTimeline from "./components/KycTimeline";
import KycSuccess from "./components/KycSuccess";

export default function KYC() {
  const {
    data,
    isLoading,
  } = useKyc();

  if (isLoading || !data) {
    return <KycSkeleton />;
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">

      <KycStatus
        status={data.status}
      />

      {data.status === "approved" ? (
        <KycSuccess />
      ) : (
        <>
          <KycForm />

          <KycTimeline />
        </>
      )}

    </main>
  );
}