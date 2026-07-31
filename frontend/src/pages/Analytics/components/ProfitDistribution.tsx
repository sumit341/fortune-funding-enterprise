export default function ProfitDistribution() {
  const distribution = [
    { label: "Winning Trades", value: "62%" },
    { label: "Losing Trades", value: "38%" },
  ];

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Profit Distribution
      </h2>

      <div className="space-y-4">
        {distribution.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-zinc-950 p-4"
          >
            <span>{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}