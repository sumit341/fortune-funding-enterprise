const risk = 42;

export default function RiskMeter() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Risk Meter
      </h2>

      <div className="flex justify-center">
        <div className="relative h-44 w-44">
          <svg
            className="rotate-[-90deg]"
            viewBox="0 0 160 160"
          >
            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#27272a"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#3b82f6"
              strokeWidth="14"
              fill="none"
              strokeDasharray={408}
              strokeDashoffset={408 - (408 * risk) / 100}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {risk}%
            </span>

            <span className="text-sm text-zinc-400">
              Risk Used
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Remaining Daily Risk: 58%
      </p>
    </div>
  );
}