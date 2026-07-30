import { useWallet } from "../../hooks/wallet/useWallet";

import WalletSkeleton from "./components/WalletSkeleton";
import WalletBalance from "./components/WalletBalance";
import DepositCard from "./components/DepositCard";
import WithdrawalCard from "./components/WithdrawalCard";
import TransactionTable from "./components/TransactionTable";

export default function Wallet() {
  const {
    data,
    isLoading,
  } = useWallet();

  if (isLoading || !data) {
    return <WalletSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <WalletBalance
        balance={data.balance}
        available={data.available}
        pending={data.pending}
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <DepositCard />

        <WithdrawalCard />

      </div>

      <TransactionTable
        transactions={data.transactions}
      />

    </main>
  );
}