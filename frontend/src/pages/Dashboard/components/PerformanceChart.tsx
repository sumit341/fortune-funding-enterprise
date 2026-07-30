export default function PerformanceChart() {
  const data = [15, 35, 28, 60, 48, 80, 72];

  const max = Math.max(...data);

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Performance
      </h2>

      <div className="flex h-56 items-end gap-3">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-blue-600 transition-all"
            style={{
              height: `${(value / max) * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}