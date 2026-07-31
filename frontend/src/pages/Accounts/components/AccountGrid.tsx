import type { TradingAccount } from "../../../api/accounts.api";

import AccountCard from "./AccountCard";

interface Props {
  accounts: TradingAccount[];
}

export default function AccountGrid({
  accounts,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
        />
      ))}

    </div>
  );
}