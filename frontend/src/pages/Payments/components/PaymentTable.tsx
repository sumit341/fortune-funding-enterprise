import type { Payment } from "../data/paymentsData";

interface Props {
  payments: Payment[];
}

export default function PaymentTable({
  payments,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <table className="w-full">
        <thead className="bg-zinc-800 text-left text-sm text-zinc-300">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Plan</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Method</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-t border-zinc-800 hover:bg-zinc-800/40"
            >
              <td className="px-6 py-4">{payment.id}</td>

              <td className="px-6 py-4 font-medium text-white">
                {payment.plan}
              </td>

              <td className="px-6 py-4 font-semibold text-green-400">
                ${payment.amount}
              </td>

              <td className="px-6 py-4">
                {payment.method}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs text-white ${
                    payment.status === "Paid"
                      ? "bg-green-600"
                      : payment.status === "Pending"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                >
                  {payment.status}
                </span>
              </td>

              <td className="px-6 py-4 text-zinc-400">
                {payment.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}