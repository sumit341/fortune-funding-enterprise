import type { Order } from "../../../api/order.api";

interface Props {
  order: Order;
}

export default function OrderCard({
  order,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        {order.challengeName}
      </h2>

      <p className="mt-2">
        Status : {order.status}
      </p>

      <p>
        Amount : £{order.amount}
      </p>

    </div>
  );
}