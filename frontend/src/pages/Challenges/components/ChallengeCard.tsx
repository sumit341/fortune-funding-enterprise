import type {
  Challenge,
} from "../../../api/challenge.api";

interface Props {
  challenge: Challenge;
}

export default function ChallengeCard({
  challenge,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500">

      <h2 className="text-xl font-bold text-white">
        {challenge.name}
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        {challenge.description}
      </p>

      <div className="mt-5 space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Platform</span>
          <span>{challenge.platform}</span>
        </div>

        <div className="flex justify-between">
          <span>Difficulty</span>
          <span>{challenge.difficulty}</span>
        </div>

        <div className="flex justify-between">
          <span>Account</span>
          <span>{challenge.accountSize}</span>
        </div>

        <div className="flex justify-between">
          <span>Profit Target</span>
          <span>{challenge.profitTarget}%</span>
        </div>

        <div className="flex justify-between">
          <span>Daily Loss</span>
          <span>{challenge.dailyLoss}%</span>
        </div>

        <div className="flex justify-between">
          <span>Max Loss</span>
          <span>{challenge.maxLoss}%</span>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-2xl font-bold text-blue-400">
          £{challenge.price}
        </span>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Buy
        </button>

      </div>

    </div>
  );
}