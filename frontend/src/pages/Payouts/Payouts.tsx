import { usePayouts } from "../../hooks/payouts/usePayouts";

import PayoutForm from "./components/PayoutForm";
import PayoutHistory from "./components/PayoutHistory";
import PayoutSkeleton from "./components/PayoutSkeleton";

export default function Payouts() {
  const { payouts } = usePayouts();

  if (payouts.isLoading || !payouts.data) {
    return <PayoutSkeleton />;
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Payout Requests
      </h1>

      <PayoutForm />

      <PayoutHistory payouts={payouts.data} />

    </main>
  );
}