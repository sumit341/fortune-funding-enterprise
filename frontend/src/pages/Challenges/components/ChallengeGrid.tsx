import type {
  Challenge,
} from "../../../api/challenge.api";

import ChallengeCard from "./ChallengeCard";

interface Props {
  challenges: Challenge[];
}

export default function ChallengeGrid({
  challenges,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {challenges.map(
        (challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
          />
        )
      )}
    </div>
  );
}