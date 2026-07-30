import type { LeaderboardUser } from "../../../api/leaderboard.api";

import LeaderboardCard from "./LeaderboardCard";

interface Props {
  traders: LeaderboardUser[];
}

export default function TopThree({
  traders,
}: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-3">

      {traders
        .slice(0, 3)
        .map((trader) => (
          <LeaderboardCard
            key={trader.id}
            trader={trader}
          />
        ))}

    </section>
  );
}