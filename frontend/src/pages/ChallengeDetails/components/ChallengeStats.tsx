import type { ChallengeDetails } from "../../../api/challenge-details.api";

interface Props {
  challenge: ChallengeDetails;
}

export default function ChallengeStats({
  challenge,
}: Props) {
  const stats = [
    {
      label: "Profit Target",
      value: `${challenge.profitTarget}%`,
    },
    {
      label: "Daily Loss",
      value: `${challenge.dailyLoss}%`,
    },
    {
      label: "Maximum Loss",
      value: `${challenge.maxLoss}%`,
    },
    {
      label: "Leverage",
      value: challenge.leverage,
    },
    {
      label: "Phases",
      value: challenge.phases,
    },
    {
      label: "Refundable",
      value: challenge.refundableFee
        ? "Yes"
        : "No",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-sm text-zinc-400">
            {item.label}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {item.value}
          </h3>
        </div>
      ))}

    </div>
  );
}