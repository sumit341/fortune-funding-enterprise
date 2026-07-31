import type {
  CertificateVerification,
} from "../../../api/verification.api";

export default function CertificateCard({
  traderName,
  challenge,
  issuedAt,
}: CertificateVerification) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold">
        {traderName}
      </h2>

      <p className="mt-3">
        Challenge:
        {" "}
        {challenge}
      </p>

      <p>
        Issued:
        {" "}
        {issuedAt}
      </p>

    </div>
  );
}