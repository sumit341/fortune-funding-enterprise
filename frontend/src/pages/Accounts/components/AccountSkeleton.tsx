export default function AccountSkeleton() {
  return (
    <div className="animate-pulse space-y-8 p-8">

      <div className="grid gap-6 md:grid-cols-4">

        <div className="h-36 rounded-xl bg-zinc-800" />

        <div className="h-36 rounded-xl bg-zinc-800" />

        <div className="h-36 rounded-xl bg-zinc-800" />

        <div className="h-36 rounded-xl bg-zinc-800" />

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="h-64 rounded-xl bg-zinc-800" />

        <div className="h-64 rounded-xl bg-zinc-800" />

        <div className="h-64 rounded-xl bg-zinc-800" />

      </div>

    </div>
  );
}