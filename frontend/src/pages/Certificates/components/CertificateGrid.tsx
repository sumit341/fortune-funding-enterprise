import type { Certificate } from "../../../api/certificate.api";

import CertificateCard from "./CertificateCard";
import EmptyCertificates from "./EmptyCertificates";

interface Props {
  certificates: Certificate[];
}

export default function CertificateGrid({
  certificates,
}: Props) {
  if (!certificates.length) {
    return <EmptyCertificates />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
        />
      ))}

    </div>
  );
}