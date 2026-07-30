import { useState } from "react";

import { useLeaderboard } from "../../hooks/leaderboard/useLeaderboard";

import LeaderboardSkeleton from "./components/LeaderboardSkeleton";
import LeaderboardSearch from "./components/LeaderboardSearch";
import LeaderboardFilters from "./components/LeaderboardFilters";
import LeaderboardTable from "./components/LeaderboardTable";
import TopThree from "./components/TopThree";

export default function Leaderboard() {
  const {
    data,
    isLoading,
  } = useLeaderboard();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  if (isLoading || !data) {
    return <LeaderboardSkeleton />;
  }

  let traders = data.filter((trader) =>
    trader.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (filter === "top10") {
    traders = traders.slice(0, 10);
  } else if (filter === "top50") {
    traders = traders.slice(0, 50);
  } else if (filter === "top100") {
    traders = traders.slice(0, 100);
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <TopThree
        traders={data}
      />

      <div className="grid gap-4 md:grid-cols-2">

        <LeaderboardSearch
          value={search}
          onChange={setSearch}
        />

        <LeaderboardFilters
          value={filter}
          onChange={setFilter}
        />

      </div>

      <LeaderboardTable
        traders={traders}
      />

    </main>
  );
}