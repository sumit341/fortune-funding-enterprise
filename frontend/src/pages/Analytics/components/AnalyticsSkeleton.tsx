export default function AnalyticsSkeleton() {
  return (
    <div className="animate-pulse space-y-8 p-8">

      <div className="grid gap-6 md:grid-cols-4">
        <div className="h-36 rounded-xl bg-zinc-800" />
        <div className="h-36 rounded-xl bg-zinc-800" />
        <div className="h-36 rounded-xl bg-zinc-800" />
        <div className="h-36 rounded-xl bg-zinc-800" />
      </div>

      <div className="h-80 rounded-xl bg-zinc-800" />

      <div className="h-56 rounded-xl bg-zinc-800" />

    </div>
  );
}