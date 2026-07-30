import { useDashboard } from "../../hooks/dashboard/useDashboard";

import DashboardSkeleton from "./components/DashboardSkeleton";
import BalanceCard from "./components/BalanceCard";
import ProfitCard from "./components/ProfitCard";
import StatisticsGrid from "./components/StatisticsGrid";
import TradingObjectives from "./components/TradingObjectives";
import PerformanceChart from "./components/PerformanceChart";
import RecentOrders from "./components/RecentOrders";
import AccountStatus from "./components/AccountStatus";

export default function Dashboard() {
  const {
    data,
    isLoading,
  } = useDashboard();

  if (isLoading || !data) {
    return <DashboardSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <div className="grid gap-6 lg:grid-cols-2">

        <BalanceCard
          balance={data.balance}
          equity={data.equity}
        />

        <ProfitCard
          profit={data.profit}
          target={data.profitTarget}
        />

      </div>

      <StatisticsGrid
        dailyDrawdown={data.dailyDrawdown}
        maxDrawdown={data.maxDrawdown}
        tradingDays={data.tradingDays}
        winRate={data.winRate}
      />

      <TradingObjectives
        profitTarget={data.profitTarget}
        dailyDrawdown={data.dailyDrawdown}
        maxDrawdown={data.maxDrawdown}
        tradingDays={data.tradingDays}
      />

      <PerformanceChart />

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentOrders />

        <AccountStatus
          balance={data.balance}
          equity={data.equity}
        />

      </div>

    </main>
  );
}