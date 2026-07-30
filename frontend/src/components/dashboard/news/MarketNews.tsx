const news = [
  {
    title: "USD strengthens after Fed comments",
    time: "5 min ago",
    impact: "High",
  },
  {
    title: "Gold slips as Dollar gains",
    time: "18 min ago",
    impact: "Medium",
  },
  {
    title: "Bitcoin trades above £92,000",
    time: "34 min ago",
    impact: "Medium",
  },
  {
    title: "BoE expected to keep rates unchanged",
    time: "1 hour ago",
    impact: "High",
  },
];

export default function MarketNews() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Market News
      </h2>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-zinc-950 p-4"
          >
            <h3 className="font-medium text-white">
              {item.title}
            </h3>

            <div className="mt-2 flex justify-between text-sm">
              <span className="text-zinc-500">
                {item.time}
              </span>

              <span
                className={`font-semibold ${
                  item.impact === "High"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {item.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}