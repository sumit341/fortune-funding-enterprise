interface Props {
  dailyDrawdown: number;
  maxDrawdown: number;
  tradingDays: number;
  winRate: number;
}

export default function StatisticsGrid({
  dailyDrawdown,
  maxDrawdown,
  tradingDays,
  winRate,
}: Props) {
  const stats = [
    {
      title: "Daily DD",
      value: `${dailyDrawdown}%`,
    },
    {
      title: "Max DD",
      value: `${maxDrawdown}%`,
    },
    {
      title: "Trading Days",
      value: tradingDays,
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-zinc-400">
            {stat.title}
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            {stat.value}
          </h3>
        </div>
      ))}

    </div>
  );
}