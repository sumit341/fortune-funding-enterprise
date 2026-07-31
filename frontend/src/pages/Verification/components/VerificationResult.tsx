import type {
  CertificateVerification,
} from "../../../api/verification.api";

import CertificateCard from "./CertificateCard";

interface Props {
  data: CertificateVerification;
}

export default function VerificationResult({
  data,
}: Props) {
  if (data.status === "invalid") {
    return (
      <div className="rounded-xl bg-red-950 p-6 text-red-300">
        Invalid Certificate
      </div>
    );
  }

  return <CertificateCard {...data} />;
}