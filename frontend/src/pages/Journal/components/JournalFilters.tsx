interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function JournalFilters({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
    >
      <option value="all">
        All Trades
      </option>

      <option value="buy">
        Buy
      </option>

      <option value="sell">
        Sell
      </option>
    </select>
  );
}