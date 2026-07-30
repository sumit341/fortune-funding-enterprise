import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
  loading: boolean;
  onCheckout(): void;
}

export default function OrderSummary({
  challenge,
  loading,
  onCheckout,
}: Props) {
  return (
    <aside className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>{challenge.name}</span>
          <span>£{challenge.price}</span>
        </div>

      </div>

      <button
        onClick={onCheckout}
        disabled={loading}
        className="mt-8 w-full rounded-lg bg-blue-600 py-3 text-white"
      >
        {loading
          ? "Creating Order..."
          : "Proceed"}
      </button>

    </aside>
  );
}