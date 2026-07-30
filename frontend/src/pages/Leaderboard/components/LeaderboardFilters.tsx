interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function LeaderboardFilters({
  value,
  onChange,
}: Props) {
  return (
    <select
      className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      <option value="all">
        All
      </option>

      <option value="top10">
        Top 10
      </option>

      <option value="top50">
        Top 50
      </option>

      <option value="top100">
        Top 100
      </option>
    </select>
  );
}