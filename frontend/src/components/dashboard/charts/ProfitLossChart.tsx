import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 260 },
  { day: "Wed", value: 180 },
  { day: "Thu", value: 420 },
  { day: "Fri", value: 370 },
  { day: "Sat", value: 520 },
  { day: "Sun", value: 480 },
];

export default function ProfitLossChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Weekly Profit
        </h2>

        <p className="text-sm text-zinc-400">
          Last 7 trading days
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="profit"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.7}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              stroke="#a1a1aa"
            />

            <YAxis
              stroke="#a1a1aa"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#profit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}