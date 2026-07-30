interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function LeaderboardSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      placeholder="Search trader..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}