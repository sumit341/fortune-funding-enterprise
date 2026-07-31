interface Props {
  status:
    | "pending"
    | "approved"
    | "rejected";
}

export default function KycStatus({
  status,
}: Props) {
  const color =
    status === "approved"
      ? "text-green-500"
      : status === "rejected"
      ? "text-red-500"
      : "text-yellow-500";

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Verification Status
      </h2>

      <p className={`mt-4 text-2xl font-bold ${color}`}>
        {status.toUpperCase()}
      </p>

    </div>
  );
}