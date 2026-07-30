export default function OrderFilters() {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <input
        placeholder="Search Symbol..."
        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none"
      />

      <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white">
        <option>All Status</option>
        <option>Open</option>
        <option>Closed</option>
      </select>

      <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white">
        <option>All Types</option>
        <option>BUY</option>
        <option>SELL</option>
      </select>
    </div>
  );
}