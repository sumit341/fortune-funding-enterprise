interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function JournalSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none"
      placeholder="Search trade..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
    />
  );
}