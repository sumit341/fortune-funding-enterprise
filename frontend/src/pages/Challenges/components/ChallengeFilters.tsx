interface Props {
  platform: string;
  difficulty: string;
  accountSize: string;

  onPlatformChange: (
    value: string
  ) => void;

  onDifficultyChange: (
    value: string
  ) => void;

  onAccountSizeChange: (
    value: string
  ) => void;
}

export default function ChallengeFilters({
  platform,
  difficulty,
  accountSize,
  onPlatformChange,
  onDifficultyChange,
  onAccountSizeChange,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <select
        value={platform}
        onChange={(e) =>
          onPlatformChange(
            e.target.value
          )
        }
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      >
        <option value="">
          All Platforms
        </option>

        <option value="MT4">
          MT4
        </option>

        <option value="MT5">
          MT5
        </option>

        <option value="DXTrade">
          DXTrade
        </option>
      </select>

      <select
        value={difficulty}
        onChange={(e) =>
          onDifficultyChange(
            e.target.value
          )
        }
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      >
        <option value="">
          All Difficulty
        </option>

        <option value="Easy">
          Easy
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Hard">
          Hard
        </option>
      </select>

      <select
        value={accountSize}
        onChange={(e) =>
          onAccountSizeChange(
            e.target.value
          )
        }
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      >
        <option value="">
          All Accounts
        </option>

        <option value="10000">
          10K
        </option>

        <option value="25000">
          25K
        </option>

        <option value="50000">
          50K
        </option>

        <option value="100000">
          100K
        </option>
      </select>

    </div>
  );
}