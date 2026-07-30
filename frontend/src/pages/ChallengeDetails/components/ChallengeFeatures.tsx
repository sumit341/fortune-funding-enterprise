import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
}

export default function ChallengeFeatures({
  challenge,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold">
        Features
      </h2>

      <div className="mt-6 grid gap-4">

        {challenge.features.map(
          (feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-zinc-800 p-4"
            >
              ✅ {feature}
            </div>
          )
        )}

      </div>

    </section>
  );
}