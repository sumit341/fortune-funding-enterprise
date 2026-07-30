import { useNavigate } from "react-router-dom";

import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
}

export default function ChallengePurchaseCard({
  challenge,
}: Props) {
  const navigate = useNavigate();

  return (
    <aside className="sticky top-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold">
        £{challenge.price}
      </h2>

      <p className="mt-3 text-zinc-400">
        One-time challenge fee
      </p>

      <button
        onClick={() =>
          navigate(
            `/checkout/${challenge.id}`
          )
        }
        className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Purchase Challenge
      </button>

    </aside>
  );
}