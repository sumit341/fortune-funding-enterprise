const orders = [
  {
    pair: "EUR/USD",
    type: "BUY",
    lot: "1.00",
    profit: "+$245",
    status: "Closed",
  },
  {
    pair: "XAU/USD",
    type: "SELL",
    lot: "0.50",
    profit: "-$81",
    status: "Closed",
  },
  {
    pair: "GBP/USD",
    type: "BUY",
    lot: "2.00",
    profit: "+$522",
    status: "Running",
  },
  {
    pair: "BTC/USD",
    type: "SELL",
    lot: "0.20",
    profit: "+$190",
    status: "Closed",
  },
];

export default function RecentOrders() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-xl font-semibold text-white">
          Recent Orders
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Pair
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Type
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Lot
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Profit
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-t border-zinc-800"
              >
                <td className="px-6 py-5 text-white">
                  {order.pair}
                </td>

                <td
                  className={`px-6 py-5 font-semibold ${
                    order.type === "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order.type}
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  {order.lot}
                </td>

                <td
                  className={`px-6 py-5 font-semibold ${
                    order.profit.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order.profit}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}