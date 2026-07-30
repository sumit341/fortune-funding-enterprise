interface Props {
  balance: number;
  available: number;
  pending: number;
}

export default function WalletBalance({
  balance,
  available,
  pending,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold">
        Wallet
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>

          <p className="text-zinc-400">
            Balance
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            £{balance.toLocaleString()}
          </h3>

        </div>

        <div>

          <p className="text-zinc-400">
            Available
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-500">
            £{available.toLocaleString()}
          </h3>

        </div>

        <div>

          <p className="text-zinc-400">
            Pending
          </p>

          <h3 className="mt-2 text-3xl font-bold text-yellow-500">
            £{pending.toLocaleString()}
          </h3>

        </div>

      </div>

    </section>
  );
}