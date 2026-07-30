interface Props {
  profitTarget: number;
  dailyDrawdown: number;
  maxDrawdown: number;
  tradingDays: number;
}

export default function TradingObjectives({
  profitTarget,
  dailyDrawdown,
  maxDrawdown,
  tradingDays,
}: Props) {
  const objectives = [
    {
      title: "Profit Target",
      value: `${profitTarget}%`,
    },
    {
      title: "Daily Drawdown",
      value: `${dailyDrawdown}%`,
    },
    {
      title: "Max Drawdown",
      value: `${maxDrawdown}%`,
    },
    {
      title: "Minimum Trading Days",
      value: tradingDays,
    },
  ];

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Trading Objectives
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {objectives.map((objective) => (
          <div
            key={objective.title}
            className="rounded-lg border border-zinc-700 p-4"
          >
            <p className="text-sm text-zinc-400">
              {objective.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {objective.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}