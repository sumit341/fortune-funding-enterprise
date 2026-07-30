export default function DepositCard() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Deposit
      </h2>

      <p className="mt-3 text-zinc-400">
        Deposit functionality will be connected
        after payment gateway integration.
      </p>

      <button
        className="mt-6 rounded-lg bg-green-600 px-5 py-3 text-white"
      >
        Deposit Funds
      </button>

    </section>
  );
}