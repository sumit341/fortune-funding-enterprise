import type {
  PayoutRequest,
} from "../../../api/payouts.api";

import PayoutStatus from "./PayoutStatus";

interface Props {
  payout: PayoutRequest;
}

export default function PayoutCard({
  payout,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          ${payout.amount}
        </h3>

        <PayoutStatus
          status={payout.status}
        />

      </div>

      <p className="mt-4 text-zinc-400">
        {payout.requestedAt}
      </p>

    </div>
  );
}