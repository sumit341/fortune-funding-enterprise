import type { Transaction } from "../../../api/wallet.api";

interface Props {
  transaction: Transaction;
}

export default function TransactionRow({
  transaction,
}: Props) {
  const color =
    transaction.type === "deposit"
      ? "text-green-500"
      : "text-red-500";

  return (
    <tr className="border-b border-zinc-800">

      <td className="py-4 capitalize">
        {transaction.type}
      </td>

      <td className={`py-4 font-semibold ${color}`}>
        £{transaction.amount}
      </td>

      <td className="py-4 capitalize">
        {transaction.status}
      </td>

      <td className="py-4">
        {transaction.createdAt}
      </td>

    </tr>
  );
}