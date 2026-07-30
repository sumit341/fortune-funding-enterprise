const markets = [
  {
    name: "Forex",
    status: "Open",
    color: "bg-green-500",
  },
  {
    name: "Crypto",
    status: "Open",
    color: "bg-green-500",
  },
  {
    name: "US Stocks",
    status: "Closed",
    color: "bg-red-500",
  },
  {
    name: "Commodities",
    status: "Open",
    color: "bg-green-500",
  },
];

export default function MarketStatus() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Market Status
      </h2>

      <div className="space-y-4">
        {markets.map((market) => (
          <div
            key={market.name}
            className="flex items-center justify-between rounded-xl bg-zinc-950 p-4"
          >
            <span className="font-medium text-white">
              {market.name}
            </span>

            <div className="flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full ${market.color}`}
              />

              <span className="text-sm text-zinc-300">
                {market.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}