import { Link } from "react-router-dom";

import { useOrders } from "../../../hooks/orders/useOrders";

export default function RecentOrders() {
  const { data } = useOrders();

  const recent =
    data?.slice(0, 5) ?? [];

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Recent Orders
        </h2>

        <Link
          to="/orders"
          className="text-blue-500"
        >
          View All
        </Link>

      </div>

      {!recent.length && (
        <p className="text-zinc-400">
          No recent orders.
        </p>
      )}

      <div className="space-y-4">

        {recent.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-lg border border-zinc-700 p-4"
          >
            <div>

              <h3 className="font-semibold">
                {order.challengeName}
              </h3>

              <p className="text-sm text-zinc-500">
                {order.createdAt}
              </p>

            </div>

            <span className="rounded bg-blue-600 px-3 py-1 text-sm">

              {order.status}

            </span>

          </div>
        ))}

      </div>

    </section>
  );
}