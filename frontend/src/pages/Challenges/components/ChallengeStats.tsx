interface Props {
  accountSize: string;
  price: string;
  profitTarget: string;
  maxLoss: string;
  dailyLoss: string;
}

export default function ChallengeStats({
  accountSize,
  price,
  profitTarget,
  maxLoss,
  dailyLoss,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Stat title="Account Size" value={accountSize} />
      <Stat title="Challenge Fee" value={price} />
      <Stat title="Profit Target" value={profitTarget} />
      <Stat title="Max Loss" value={maxLoss} />
      <Stat title="Daily Loss" value={dailyLoss} />
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-4 border border-zinc-800">
      <p className="text-xs uppercase tracking-wide text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}