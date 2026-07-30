export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-6 p-8">

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="h-40 rounded-xl bg-zinc-800" />

        <div className="h-40 rounded-xl bg-zinc-800" />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="h-32 rounded-xl bg-zinc-800" />

        <div className="h-32 rounded-xl bg-zinc-800" />

        <div className="h-32 rounded-xl bg-zinc-800" />

        <div className="h-32 rounded-xl bg-zinc-800" />

      </div>

      <div className="h-72 rounded-xl bg-zinc-800" />

    </div>
  );
}