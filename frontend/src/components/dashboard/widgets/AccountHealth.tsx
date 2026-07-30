const stats = [
  {
    label: "Account Status",
    value: "Healthy",
    color: "text-green-400",
  },
  {
    label: "Drawdown",
    value: "2.8%",
    color: "text-yellow-400",
  },
  {
    label: "Consistency",
    value: "91%",
    color: "text-blue-400",
  },
  {
    label: "Risk Score",
    value: "Low",
    color: "text-green-400",
  },
];

export default function AccountHealth() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Account Health
      </h2>

      <div className="space-y-5">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between"
          >
            <span className="text-zinc-400">
              {item.label}
            </span>

            <span className={`font-bold ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}