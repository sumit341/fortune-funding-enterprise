import type { JournalEntry } from "../../../api/journal.api";

interface Props {
  entry: JournalEntry;
}

export default function JournalRow({
  entry,
}: Props) {
  return (
    <tr className="border-b border-zinc-800">

      <td className="py-4">
        {entry.symbol}
      </td>

      <td className="py-4 capitalize">
        {entry.side}
      </td>

      <td
        className={`py-4 ${
          entry.profit >= 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        £{entry.profit}
      </td>

      <td className="py-4">
        {entry.createdAt}
      </td>

    </tr>
  );
}