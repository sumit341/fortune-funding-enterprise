export default function PayoutHistory() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Payout History
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between rounded-lg bg-zinc-950 p-4">

          <span>
            June 2026
          </span>

          <span>
            $520
          </span>

        </div>

        <div className="flex justify-between rounded-lg bg-zinc-950 p-4">

          <span>
            July 2026
          </span>

          <span>
            $840
          </span>

        </div>

      </div>

    </section>
  );
}