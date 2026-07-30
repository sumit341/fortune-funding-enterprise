export default function JournalSkeleton() {
  return (
    <div className="animate-pulse space-y-6 p-8">

      <div className="grid gap-6 md:grid-cols-3">

        <div className="h-32 rounded-xl bg-zinc-800" />
        <div className="h-32 rounded-xl bg-zinc-800" />
        <div className="h-32 rounded-xl bg-zinc-800" />

      </div>

      <div className="h-96 rounded-xl bg-zinc-800" />

    </div>
  );
}