import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white">
          Trading Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Monitor your account performance and trading activity.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Wallet Balance"
          value="$25,000"
          subtitle="Available capital"
        />

        <StatCard
          title="Active Challenge"
          value="Phase 1"
          subtitle="Currently running"
        />

        <StatCard
          title="Today's Profit"
          value="+$420"
          subtitle="2 Winning trades"
        />

        <StatCard
          title="Today's Loss"
          value="-$90"
          subtitle="1 Losing trade"
        />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-xl font-semibold text-white">
            Recent Orders
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between rounded-lg bg-zinc-800 p-4">
              <span className="text-white">
                EUR/USD Buy
              </span>

              <span className="font-semibold text-green-400">
                +$120
              </span>
            </div>

            <div className="flex justify-between rounded-lg bg-zinc-800 p-4">
              <span className="text-white">
                XAU/USD Sell
              </span>

              <span className="font-semibold text-red-400">
                -$45
              </span>
            </div>

            <div className="flex justify-between rounded-lg bg-zinc-800 p-4">
              <span className="text-white">
                GBP/USD Buy
              </span>

              <span className="font-semibold text-green-400">
                +$300
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-xl font-semibold text-white">
            Challenge Progress
          </h2>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm text-zinc-400">
                <span>Progress</span>
                <span>68%</span>
              </div>

              <div className="h-3 rounded-full bg-zinc-800">
                <div className="h-3 w-[68%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard
                title="Target"
                value="$5,000"
              />

              <StatCard
                title="Current"
                value="$3,420"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}