import { useNavigate, useParams } from "react-router-dom";

import { useChallengeDetails } from "../../hooks/challenge-details/useChallengeDetails";
import { useCreateOrder } from "../../hooks/orders/useCreateOrder";

import OrderSummary from "./components/OrderSummary";
import BillingCard from "./components/BillingCard";
import PaymentMethod from "./components/PaymentMethod";
import CheckoutSkeleton from "./components/CheckoutSkeleton";

export default function Checkout() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, isLoading } =
    useChallengeDetails(id);

  const createOrder =
    useCreateOrder();

  if (isLoading || !data) {
    return <CheckoutSkeleton />;
  }

  async function handleCheckout() {
    const order =
      await createOrder.mutateAsync({
        challengeId: data.id,
      });

    navigate(`/orders/${order.id}`);
  }

  return (
    <div className="mx-auto max-w-7xl grid gap-8 p-8 lg:grid-cols-3">

      <div className="space-y-8 lg:col-span-2">

        <BillingCard />

        <PaymentMethod />

      </div>

      <OrderSummary
        challenge={data}
        onCheckout={handleCheckout}
        loading={createOrder.isPending}
      />

    </div>
  );
}