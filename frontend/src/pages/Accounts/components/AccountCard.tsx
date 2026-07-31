import type { TradingAccount } from "../../../api/accounts.api";
import AccountStatus from "./AccountStatus";

interface Props {
  account: TradingAccount;
}

export default function AccountCard({
  account,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          #{account.accountNumber}
        </h3>

        <AccountStatus status={account.status} />

      </div>

      <div className="mt-6 space-y-2">

        <p>Phase: {account.phase}</p>

        <p>Balance: ${account.balance}</p>

        <p>Equity: ${account.equity}</p>

      </div>

    </div>
  );
}