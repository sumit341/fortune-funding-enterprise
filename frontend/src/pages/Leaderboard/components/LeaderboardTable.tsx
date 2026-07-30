import type { LeaderboardUser } from "../../../api/leaderboard.api";

import EmptyLeaderboard from "./EmptyLeaderboard";
import LeaderboardRow from "./LeaderboardRow";

interface Props {
  traders: LeaderboardUser[];
}

export default function LeaderboardTable({
  traders,
}: Props) {
  if (!traders.length) {
    return <EmptyLeaderboard />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

      <table className="w-full">

        <thead className="bg-zinc-800">

          <tr>

            <th className="p-4 text-left">
              Rank
            </th>

            <th className="p-4 text-left">
              Trader
            </th>

            <th className="p-4 text-left">
              Country
            </th>

            <th className="p-4 text-left">
              Profit
            </th>

            <th className="p-4 text-left">
              Win Rate
            </th>

          </tr>

        </thead>

        <tbody>

          {traders.map((trader) => (
            <LeaderboardRow
              key={trader.id}
              trader={trader}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}