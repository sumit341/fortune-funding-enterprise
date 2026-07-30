import type { LeaderboardUser } from "../../../api/leaderboard.api";

interface Props {
  trader: LeaderboardUser;
}

export default function LeaderboardCard({
  trader,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-bold">
          #{trader.rank}
        </h3>

        <span>
          {trader.country}
        </span>

      </div>

      <h2 className="mt-4 text-2xl font-bold">
        {trader.name}
      </h2>

      <p className="mt-4 text-green-500 text-xl font-semibold">
        +{trader.profit}%
      </p>

      <p className="mt-2 text-zinc-400">
        Win Rate {trader.winRate}%
      </p>

    </div>
  );
}