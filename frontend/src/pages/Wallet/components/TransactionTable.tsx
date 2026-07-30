import type { Transaction } from "../../../api/wallet.api";

import EmptyTransactions from "./EmptyTransactions";
import TransactionRow from "./TransactionRow";

interface Props {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: Props) {
  if (!transactions.length) {
    return <EmptyTransactions />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

      <table className="w-full">

        <thead className="bg-zinc-800">

          <tr>

            <th className="p-4 text-left">
              Type
            </th>

            <th className="p-4 text-left">
              Amount
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}