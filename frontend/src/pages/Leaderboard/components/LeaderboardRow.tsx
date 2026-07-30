import type { LeaderboardUser } from "../../../api/leaderboard.api";

interface Props {
  trader: LeaderboardUser;
}

export default function LeaderboardRow({
  trader,
}: Props) {
  return (
    <tr className="border-b border-zinc-800">

      <td className="py-4">
        #{trader.rank}
      </td>

      <td className="py-4">
        {trader.name}
      </td>

      <td className="py-4">
        {trader.country}
      </td>

      <td className="py-4 text-green-500">
        +{trader.profit}%
      </td>

      <td className="py-4">
        {trader.winRate}%
      </td>

    </tr>
  );
}