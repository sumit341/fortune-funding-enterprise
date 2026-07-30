import { useCertificates } from "../../hooks/certificates/useCertificates";

import CertificateSkeleton from "./components/CertificateSkeleton";
import CertificateGrid from "./components/CertificateGrid";
import CertificatePreview from "./components/CertificatePreview";
import CertificateActions from "./components/CertificateActions";

export default function Certificates() {
  const {
    data,
    isLoading,
  } = useCertificates();

  if (isLoading || !data) {
    return <CertificateSkeleton />;
  }

  const latestCertificate =
    data[0];

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      {latestCertificate && (
        <>
          <CertificatePreview
            certificate={
              latestCertificate
            }
          />

          <CertificateActions
            downloadUrl={
              latestCertificate.downloadUrl
            }
          />
        </>
      )}

      <CertificateGrid
        certificates={data}
      />

    </main>
  );
}