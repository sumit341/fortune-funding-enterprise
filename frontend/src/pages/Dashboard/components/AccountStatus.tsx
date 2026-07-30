interface Props {
  balance: number;
  equity: number;
}

export default function AccountStatus({
  balance,
  equity,
}: Props) {
  const healthy =
    equity >= balance * 0.9;

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Account Status
      </h2>

      <div className="mt-6">

        <div className="flex items-center justify-between">

          <span>Status</span>

          <span
            className={`font-semibold ${
              healthy
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {healthy
              ? "Healthy"
              : "At Risk"}
          </span>

        </div>

        <div className="mt-5 h-3 overflow-hidden rounded bg-zinc-800">

          <div
            className={`h-full ${
              healthy
                ? "bg-green-500"
                : "bg-red-500"
            }`}
            style={{
              width: `${Math.min(
                (equity / balance) * 100,
                100
              )}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}