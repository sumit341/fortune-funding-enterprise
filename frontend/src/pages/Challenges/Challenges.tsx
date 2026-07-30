import { useState } from "react";

import { useChallenges } from "../../hooks/challenges/useChallenges";

import ChallengeGrid from "./components/ChallengeGrid";
import ChallengeFilters from "./components/ChallengeFilters";
import ChallengePagination from "./components/ChallengePagination";
import ChallengeSearch from "./components/ChallengeSearch";
import ChallengeSkeleton from "./components/ChallengeSkeleton";
import EmptyChallenges from "./components/EmptyChallenges";

export default function Challenges() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [platform, setPlatform] = useState("");

  const [difficulty, setDifficulty] =
    useState("");

  const [accountSize, setAccountSize] =
    useState("");

  const {
    data,
    isLoading,
    isError,
  } = useChallenges({
    page,
    limit: 9,
    search,
    platform,
    difficulty,
    accountSize,
  });

  if (isError) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load challenges.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">

      <div>

        <h1 className="text-4xl font-bold">
          Trading Challenges
        </h1>

        <p className="mt-2 text-zinc-400">
          Choose your preferred funded account challenge.
        </p>

      </div>

      <ChallengeSearch
        value={search}
        onChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      <ChallengeFilters
        platform={platform}
        difficulty={difficulty}
        accountSize={accountSize}
        onPlatformChange={(value) => {
          setPlatform(value);
          setPage(1);
        }}
        onDifficultyChange={(value) => {
          setDifficulty(value);
          setPage(1);
        }}
        onAccountSizeChange={(value) => {
          setAccountSize(value);
          setPage(1);
        }}
      />

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 9 }).map(
            (_, index) => (
              <ChallengeSkeleton
                key={index}
              />
            )
          )}
        </div>
      ) : data?.items?.length ? (
        <>
          <ChallengeGrid
            challenges={data.items}
          />

          <ChallengePagination
            page={data.page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        </>
      ) : (
        <EmptyChallenges />
      )}
    </div>
  );
}