interface Props {
  total: number;
  active: number;
  passed: number;
  failed: number;
}

export default function AccountMetrics({
  total,
  active,
  passed,
  failed,
}: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-4">

      <Metric
        title="Total Accounts"
        value={total}
      />

      <Metric
        title="Active"
        value={active}
      />

      <Metric
        title="Passed"
        value={passed}
      />

      <Metric
        title="Failed"
        value={failed}
      />

    </section>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}