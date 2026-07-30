export default function WithdrawalCard() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Withdrawal
      </h2>

      <p className="mt-3 text-zinc-400">
        Withdrawals will be enabled after KYC
        verification.
      </p>

      <button
        className="mt-6 rounded-lg bg-red-600 px-5 py-3 text-white"
      >
        Withdraw Funds
      </button>

    </section>
  );
}