interface WalletCardProps {
  balance: string;
  equity: string;
  profit: string;
}

export default function WalletCard({
  balance,
  equity,
  profit,
}: WalletCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-blue-700 to-indigo-900 p-7 shadow-xl">

      <p className="text-sm text-blue-100">
        Trading Wallet
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {balance}
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div>

          <p className="text-sm text-blue-200">
            Equity
          </p>

          <h3 className="mt-1 text-xl font-semibold text-white">
            {equity}
          </h3>

        </div>

        <div>

          <p className="text-sm text-blue-200">
            Today's P/L
          </p>

          <h3 className="mt-1 text-xl font-semibold text-green-300">
            {profit}
          </h3>

        </div>

      </div>

    </div>
  );
}