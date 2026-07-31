import { useState } from "react";
import { usePayouts } from "../../../hooks/payouts/usePayouts";

export default function PayoutForm() {
  const { create } = usePayouts();

  const [amount, setAmount] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();

    const value = Number(amount);

    if (!value || value <= 0) return;

    create.mutate(value);

    setAmount("");
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">
        Request Payout
      </h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <button
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        disabled={create.isPending}
      >
        {create.isPending ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}