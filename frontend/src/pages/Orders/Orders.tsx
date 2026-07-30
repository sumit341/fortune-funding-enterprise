import { useOrders } from "../../hooks/orders/useOrders";

import OrderCard from "./components/OrderCard";
import EmptyOrders from "./components/EmptyOrders";

export default function Orders() {
  const {
    data,
    isLoading,
  } = useOrders();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data?.length) {
    return <EmptyOrders />;
  }

  return (
    <div className="mx-auto max-w-7xl grid gap-6 p-8">

      {data.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}

    </div>
  );
}