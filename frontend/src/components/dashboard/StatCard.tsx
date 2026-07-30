import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10">

      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-zinc-500">
              {subtitle}
            </p>
          )}

          {trend && (
            <p className="mt-4 font-medium text-emerald-400">
              {trend}
            </p>
          )}

        </div>

        {icon && (
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 text-2xl text-blue-500">
            {icon}
          </div>
        )}

      </div>

    </div>
  );
}