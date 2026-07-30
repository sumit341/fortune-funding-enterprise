import type { JournalEntry } from "../../../api/journal.api";

interface Props {
  entry: JournalEntry;
}

export default function JournalEntryCard({
  entry,
}: Props) {
  const profitColor =
    entry.profit >= 0
      ? "text-green-500"
      : "text-red-500";

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between">

        <h3 className="font-semibold">
          {entry.symbol}
        </h3>

        <span className="capitalize">
          {entry.side}
        </span>

      </div>

      <p className={`mt-4 text-xl font-bold ${profitColor}`}>
        £{entry.profit}
      </p>

      <p className="mt-3 text-sm text-zinc-400">
        {entry.notes}
      </p>

      <p className="mt-4 text-xs text-zinc-500">
        {entry.createdAt}
      </p>
    </div>
  );
}