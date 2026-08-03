import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Card } from "../../atoms/Card/Card";

import { Badge } from "../../atoms/Badge/Badge";

interface StatCardProps {
  title: string;

  value: string;

  change: number;

  icon?: React.ReactNode;
}

export function StatCard({
  title,
  value,
  change,
  icon,
}: StatCardProps) {
  const positive = change >= 0;

  return (
    <Card
      variant="glass"
      className="space-y-5"
    >
      <div className="flex items-center justify-between">

        <span className="text-zinc-400 text-sm">
          {title}
        </span>

        {icon}

      </div>

      <h2 className="text-3xl font-bold text-white">
        {value}
      </h2>

      <Badge
        variant={
          positive
            ? "success"
            : "danger"
        }
      >
        {positive
          ? <ArrowUpRight size={14}/>
          : <ArrowDownRight size={14}/>
        }

        {Math.abs(change)}%
      </Badge>
    </Card>
  );
}