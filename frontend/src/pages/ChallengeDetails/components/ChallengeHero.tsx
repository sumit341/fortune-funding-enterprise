import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
}

export default function ChallengeHero({
  challenge,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">

      <h1 className="text-4xl font-bold">
        {challenge.name}
      </h1>

      <p className="mt-4 text-zinc-400">
        {challenge.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded bg-blue-600 px-3 py-1">
          {challenge.platform}
        </span>

        <span className="rounded bg-green-600 px-3 py-1">
          {challenge.accountSize}
        </span>

        <span className="rounded bg-orange-600 px-3 py-1">
          {challenge.difficulty}
        </span>

      </div>

    </section>
  );
}