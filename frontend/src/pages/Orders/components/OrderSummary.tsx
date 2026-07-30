export default function OrderSummary() {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-4">
      <Card title="Total Orders" value="158" />
      <Card title="Open Orders" value="12" />
      <Card title="Closed Orders" value="146" />
      <Card title="Net Profit" value="+$8,240" />
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}