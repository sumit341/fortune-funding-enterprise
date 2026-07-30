const rules = [
  {
    title: "Profit Target",
    value: "£3,420 / £5,000",
    progress: 68,
    color: "bg-green-500",
  },
  {
    title: "Max Daily Loss",
    value: "£420 / £1,250",
    progress: 34,
    color: "bg-yellow-500",
  },
  {
    title: "Max Overall Loss",
    value: "£640 / £2,500",
    progress: 26,
    color: "bg-red-500",
  },
  {
    title: "Minimum Trading Days",
    value: "7 / 10 Days",
    progress: 70,
    color: "bg-blue-500",
  },
];

export default function ChallengeProgress() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Challenge Progress
      </h2>

      <div className="space-y-6">
        {rules.map((rule) => (
          <div key={rule.title}>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-zinc-400">
                {rule.title}
              </span>

              <span className="text-sm font-medium text-white">
                {rule.value}
              </span>
            </div>

            <div className="h-3 rounded-full bg-zinc-800">
              <div
                className={`h-3 rounded-full ${rule.color}`}
                style={{
                  width: `${rule.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}