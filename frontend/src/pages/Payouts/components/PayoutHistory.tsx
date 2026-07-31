import type {
  PayoutRequest,
} from "../../../api/payouts.api";

import PayoutCard from "./PayoutCard";

interface Props {
  payouts: PayoutRequest[];
}

export default function PayoutHistory({
  payouts,
}: Props) {
  return (
    <div className="space-y-4">

      {payouts.map((item) => (
        <PayoutCard
          key={item.id}
          payout={item}
        />
      ))}

    </div>
  );
}