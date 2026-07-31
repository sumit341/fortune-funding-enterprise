import type { AnalyticsData } from "../../../api/analytics.api";
import AnalyticsCard from "./AnalyticsCard";

interface Props {
  data: AnalyticsData;
}

export default function AnalyticsGrid({
  data,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <AnalyticsCard
        title="Total PnL"
        value={`$${data.totalPnL}`}
      />

      <AnalyticsCard
        title="Max Drawdown"
        value={`${data.maxDrawdown}%`}
      />

      <AnalyticsCard
        title="Expectancy"
        value={data.expectancy}
      />

      <AnalyticsCard
        title="Consistency"
        value={`${data.consistencyScore}%`}
      />

    </div>
  );
}