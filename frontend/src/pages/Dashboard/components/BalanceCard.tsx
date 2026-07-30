interface Props {
  balance: number;
  equity: number;
}

export default function BalanceCard({
  balance,
  equity,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold">
        Account Balance
      </h2>

      <p className="mt-6 text-4xl font-bold">
        £{balance.toLocaleString()}
      </p>

      <p className="mt-2 text-zinc-400">
        Equity: £{equity.toLocaleString()}
      </p>
    </div>
  );
}