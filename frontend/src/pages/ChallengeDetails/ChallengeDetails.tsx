import { useParams } from "react-router-dom";

import { useChallengeDetails } from "../../hooks/challenge-details/useChallengeDetails";

import ChallengeHero from "./components/ChallengeHero";
import ChallengeStats from "./components/ChallengeStats";
import ChallengeRules from "./components/ChallengeRules";
import ChallengeFeatures from "./components/ChallengeFeatures";
import ChallengePurchaseCard from "./components/ChallengePurchaseCard";
import ChallengeDetailsSkeleton from "./components/ChallengeDetailsSkeleton";

export default function ChallengeDetails() {
  const { id } = useParams();

  const {
    data: challenge,
    isLoading,
    isError,
  } = useChallengeDetails(id);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl p-8">
        <ChallengeDetailsSkeleton />
      </div>
    );
  }

  if (isError || !challenge) {
    return (
      <div className="mx-auto max-w-7xl p-8">

        <div className="rounded-xl border border-red-500 bg-red-500/10 p-8">

          <h2 className="text-2xl font-bold text-red-400">
            Challenge Not Found
          </h2>

          <p className="mt-4 text-zinc-300">
            The requested challenge could not be loaded.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">

      <ChallengeHero challenge={challenge} />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="space-y-8 xl:col-span-2">

          <ChallengeStats challenge={challenge} />

          <ChallengeRules challenge={challenge} />

          <ChallengeFeatures challenge={challenge} />

        </div>

        <ChallengePurchaseCard challenge={challenge} />

      </div>

    </div>
  );
}