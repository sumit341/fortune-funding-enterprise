import type { Certificate } from "../../../api/certificate.api";

interface Props {
  certificate: Certificate;
}

export default function CertificateCard({
  certificate,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        {certificate.challengeName}
      </h2>

      <p className="mt-3 text-zinc-400">
        {certificate.traderName}
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        Issued:
        {" "}
        {certificate.issuedAt}
      </p>

    </div>
  );
}