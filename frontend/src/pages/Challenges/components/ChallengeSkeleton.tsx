export default function ChallengeSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="h-7 w-40 rounded bg-zinc-700" />

      <div className="mt-5 h-4 rounded bg-zinc-700" />

      <div className="mt-2 h-4 w-3/4 rounded bg-zinc-700" />

      <div className="mt-8 space-y-3">

        <div className="h-4 rounded bg-zinc-700" />

        <div className="h-4 rounded bg-zinc-700" />

        <div className="h-4 rounded bg-zinc-700" />

      </div>

      <div className="mt-8 h-10 rounded bg-zinc-700" />

    </div>
  );
}