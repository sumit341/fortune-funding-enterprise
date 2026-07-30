interface Payment {
  id: number;
  user: string;
  amount: string;
  status: string;
}

interface Props {
  payments: Payment[];
}

export default function RecentPayments({
  payments,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-xl font-bold text-white">
        Recent Payments
      </h2>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between rounded-lg bg-zinc-800 p-4"
          >
            <div>
              <h3 className="font-semibold text-white">
                {payment.user}
              </h3>

              <p className="text-sm text-zinc-400">
                #{payment.id}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-400">
                {payment.amount}
              </p>

              <p className="text-sm text-zinc-400">
                {payment.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}