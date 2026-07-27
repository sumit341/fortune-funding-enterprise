interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
      <h3 className="text-sm text-zinc-400">
        {title}
      </h3>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-zinc-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}