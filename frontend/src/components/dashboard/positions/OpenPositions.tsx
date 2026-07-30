const positions = [
  {
    pair: "EUR/USD",
    side: "BUY",
    lots: "1.20",
    open: "1.08250",
    current: "1.08410",
    profit: "+£185",
  },
  {
    pair: "GBP/USD",
    side: "SELL",
    lots: "0.80",
    open: "1.29110",
    current: "1.28920",
    profit: "+£152",
  },
  {
    pair: "XAU/USD",
    side: "BUY",
    lots: "0.50",
    open: "3372.10",
    current: "3368.40",
    profit: "-£96",
  },
];

export default function OpenPositions() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-xl font-semibold text-white">
          Open Positions
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">Pair</th>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">Side</th>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">Lots</th>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">Open</th>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">Current</th>
              <th className="px-5 py-4 text-left text-sm text-zinc-400">P/L</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((position) => (
              <tr
                key={`${position.pair}-${position.side}`}
                className="border-t border-zinc-800"
              >
                <td className="px-5 py-4 text-white">
                  {position.pair}
                </td>

                <td
                  className={`px-5 py-4 font-semibold ${
                    position.side === "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {position.side}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {position.lots}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {position.open}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {position.current}
                </td>

                <td
                  className={`px-5 py-4 font-bold ${
                    position.profit.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {position.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}