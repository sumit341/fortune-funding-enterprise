import orders from "../data/orders";
import OrderStatus from "./OrderStatus";

export default function OrderTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr className="text-left text-zinc-400">
            <th className="p-4">Symbol</th>
            <th>Type</th>
            <th>Status</th>
            <th>Lot</th>
            <th>Open</th>
            <th>Close</th>
            <th>P/L</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-zinc-800"
            >
              <td className="p-4 text-white">
                {order.symbol}
              </td>

              <td>{order.type}</td>

              <td>
                <OrderStatus
                  status={order.status}
                />
              </td>

              <td>{order.lot}</td>

              <td>{order.openPrice}</td>

              <td>
                {order.closePrice ?? "-"}
              </td>

              <td
                className={
                  order.pnl >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {order.pnl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}