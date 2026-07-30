interface Props {
  totalChallenges: number;
  completedChallenges: number;
}

export default function ProfileStatistics({
  totalChallenges,
  completedChallenges,
}: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-2">

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

        <p className="text-zinc-400">
          Total Challenges
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {totalChallenges}
        </h2>

      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

        <p className="text-zinc-400">
          Completed Challenges
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {completedChallenges}
        </h2>

      </div>

    </section>
  );
}