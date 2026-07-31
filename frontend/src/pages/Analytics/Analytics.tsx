import { useAnalytics } from "../../hooks/analytics/useAnalytics";

import AnalyticsGrid from "./components/AnalyticsGrid";
import DrawdownChart from "./components/DrawdownChart";
import ProfitDistribution from "./components/ProfitDistribution";
import AnalyticsSkeleton from "./components/AnalyticsSkeleton";

export default function Analytics() {
  const {
    data,
    isLoading,
  } = useAnalytics();

  if (isLoading || !data) {
    return <AnalyticsSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Performance Analytics
      </h1>

      <AnalyticsGrid data={data} />

      <DrawdownChart />

      <ProfitDistribution />

    </main>
  );
}