interface Props {
  value: string;

  onChange: (
    value: string
  ) => void;
}

export default function ChallengeSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      placeholder="Search challenge..."
      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
    />
  );
}