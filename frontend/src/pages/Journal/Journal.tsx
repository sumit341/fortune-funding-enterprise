import { useState } from "react";

import { useJournal } from "../../hooks/journal/useJournal";

import JournalSkeleton from "./components/JournalSkeleton";
import JournalStats from "./components/JournalStats";
import JournalSearch from "./components/JournalSearch";
import JournalFilters from "./components/JournalFilters";
import JournalTable from "./components/JournalTable";

export default function Journal() {
  const { data, isLoading } =
    useJournal();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  if (isLoading || !data) {
    return <JournalSkeleton />;
  }

  const filteredEntries =
    data.entries.filter((entry) => {
      const searchMatch =
        entry.symbol
          .toLowerCase()
          .includes(search.toLowerCase());

      const filterMatch =
        filter === "all"
          ? true
          : entry.side === filter;

      return searchMatch && filterMatch;
    });

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <JournalStats
        totalTrades={data.totalTrades}
        winningTrades={data.winningTrades}
        losingTrades={data.losingTrades}
      />

      <div className="grid gap-4 md:grid-cols-2">

        <JournalSearch
          value={search}
          onChange={setSearch}
        />

        <JournalFilters
          value={filter}
          onChange={setFilter}
        />

      </div>

      <JournalTable
        entries={filteredEntries}
      />

    </main>
  );
}