import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
}

export default function ChallengeRules({
  challenge,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold">
        Trading Rules
      </h2>

      <ul className="mt-6 space-y-3">

        {challenge.rules.map(
          (rule, index) => (
            <li
              key={index}
              className="rounded-lg bg-zinc-800 p-4"
            >
              {rule}
            </li>
          )
        )}

      </ul>

    </section>
  );
}