export default function PlatformDownloads() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Trading Platforms
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <button className="rounded-lg bg-zinc-800 p-4">
          MetaTrader 4
        </button>

        <button className="rounded-lg bg-zinc-800 p-4">
          MetaTrader 5
        </button>

        <button className="rounded-lg bg-zinc-800 p-4">
          DXtrade
        </button>

      </div>

    </section>
  );
}