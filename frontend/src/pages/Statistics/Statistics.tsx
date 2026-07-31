import { useStatistics } from "../../hooks/statistics/useStatistics";

import StatisticsGrid from "./components/StatisticsGrid";
import StatisticsChart from "./components/StatisticsChart";
import MonthlyPerformance from "./components/MonthlyPerformance";
import StatisticsSkeleton from "./components/StatisticsSkeleton";

export default function Statistics() {
  const {
    data,
    isLoading,
  } = useStatistics();

  if (isLoading || !data) {
    return <StatisticsSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">
      <h1 className="text-4xl font-bold">
        Trading Statistics
      </h1>

      <StatisticsGrid data={data} />

      <StatisticsChart />

      <MonthlyPerformance />
    </main>
  );
}