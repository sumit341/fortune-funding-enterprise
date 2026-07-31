import { useState } from "react";

import { useVerification } from "../../hooks/verification/useVerification";

import CertificateSearch from "./components/CertificateSearch";
import VerificationResult from "./components/VerificationResult";
import VerificationSkeleton from "./components/VerificationSkeleton";

export default function Verification() {
  const [searched, setSearched] = useState(false);

  const verification = useVerification();

  function handleSearch(id: string) {
    setSearched(true);
    verification.mutate(id);
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Certificate Verification
      </h1>

      <CertificateSearch
        onSearch={handleSearch}
      />

      {verification.isPending && (
        <VerificationSkeleton />
      )}

      {verification.data && (
        <VerificationResult
          data={verification.data}
        />
      )}

      {searched &&
        verification.isError && (
          <div className="rounded-xl bg-red-950 p-6 text-red-300">
            Unable to verify certificate.
          </div>
        )}

    </main>
  );
}