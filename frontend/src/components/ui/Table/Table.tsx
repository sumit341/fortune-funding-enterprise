import { ReactNode } from "react";

interface Props {
  headers: string[];
  children: ReactNode;
}

export default function Table({
  headers,
  children,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="min-w-full">
        <thead className="bg-zinc-900">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-4 text-left text-sm font-semibold text-zinc-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-800 bg-zinc-950">
          {children}
        </tbody>
      </table>
    </div>
  );
}