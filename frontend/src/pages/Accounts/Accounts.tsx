import { useAccounts } from "../../hooks/accounts/useAccounts";

import AccountGrid from "./components/AccountGrid";
import AccountMetrics from "./components/AccountMetrics";
import AccountSkeleton from "./components/AccountSkeleton";

export default function Accounts() {
  const {
    data,
    isLoading,
  } = useAccounts();

  if (isLoading || !data) {
    return <AccountSkeleton />;
  }

  const active =
    data.filter((a) => a.status === "active").length;

  const passed =
    data.filter((a) => a.status === "passed").length;

  const failed =
    data.filter((a) => a.status === "failed").length;

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Trading Accounts
      </h1>

      <AccountMetrics
        total={data.length}
        active={active}
        passed={passed}
        failed={failed}
      />

      <AccountGrid
        accounts={data}
      />

    </main>
  );
}