import PaymentTable from "./components/PaymentTable";
import paymentsData from "./data/paymentsData";

export default function Payments() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Payments
        </h1>

        <p className="mt-2 text-zinc-400">
          Review your payment history and challenge purchases.
        </p>
      </div>

      <PaymentTable payments={paymentsData} />
    </div>
  );
}