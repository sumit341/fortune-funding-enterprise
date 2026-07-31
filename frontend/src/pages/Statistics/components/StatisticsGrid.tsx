import type { TradingStatistics } from "../../../api/statistics.api";
import StatisticCard from "./StatisticCard";

interface Props {
  data: TradingStatistics;
}

export default function StatisticsGrid({
  data,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatisticCard
        title="Total Trades"
        value={data.totalTrades}
      />

      <StatisticCard
        title="Win Rate"
        value={`${data.winRate}%`}
      />

      <StatisticCard
        title="Profit Factor"
        value={data.profitFactor}
      />

      <StatisticCard
        title="Average R:R"
        value={data.averageRR}
      />

    </div>
  );
}