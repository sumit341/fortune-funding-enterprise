import type { JournalEntry } from "../../../api/journal.api";

import EmptyJournal from "./EmptyJournal";
import JournalRow from "./JournalRow";

interface Props {
  entries: JournalEntry[];
}

export default function JournalTable({
  entries,
}: Props) {
  if (!entries.length) {
    return <EmptyJournal />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

      <table className="w-full">

        <thead className="bg-zinc-800">

          <tr>

            <th className="p-4 text-left">
              Symbol
            </th>

            <th className="p-4 text-left">
              Side
            </th>

            <th className="p-4 text-left">
              Profit
            </th>

            <th className="p-4 text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {entries.map((entry) => (
            <JournalRow
              key={entry.id}
              entry={entry}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}