export default function MonthlyPerformance() {
  const months = [
    { month: "Jan", pnl: "+4.2%" },
    { month: "Feb", pnl: "+2.8%" },
    { month: "Mar", pnl: "-1.1%" },
    { month: "Apr", pnl: "+6.4%" },
    { month: "May", pnl: "+3.7%" },
    { month: "Jun", pnl: "+5.1%" },
  ];

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Monthly Performance
      </h2>

      <div className="space-y-3">
        {months.map((item) => (
          <div
            key={item.month}
            className="flex items-center justify-between rounded-lg bg-zinc-950 p-4"
          >
            <span>{item.month}</span>

            <span
              className={
                item.pnl.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {item.pnl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}