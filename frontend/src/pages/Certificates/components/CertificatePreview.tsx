import type { Certificate } from "../../../api/certificate.api";

interface Props {
  certificate: Certificate;
}

export default function CertificatePreview({
  certificate,
}: Props) {
  return (
    <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center">

      <h2 className="text-3xl font-bold">
        Certificate
      </h2>

      <p className="mt-8">
        Awarded to
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {certificate.traderName}
      </h3>

      <p className="mt-8">
        For successfully completing
      </p>

      <h3 className="mt-3 text-xl">
        {certificate.challengeName}
      </h3>

    </div>
  );
}