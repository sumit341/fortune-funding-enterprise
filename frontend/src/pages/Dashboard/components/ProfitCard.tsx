interface Props {
  profit: number;
  target: number;
}

export default function ProfitCard({
  profit,
  target,
}: Props) {
  const percentage =
    Math.min(
      (profit / target) * 100,
      100
    );

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Profit Target
      </h2>

      <div className="mt-5 h-3 overflow-hidden rounded bg-zinc-800">

        <div
          className="h-full bg-green-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-4">
        £{profit} / £{target}
      </p>

    </div>
  );
}