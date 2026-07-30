import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaWallet,
  FaBullseye,
} from "react-icons/fa6";

const stats = [
  {
    title: "Account Balance",
    value: "$25,420",
    icon: <FaWallet />,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Equity",
    value: "$25,865",
    icon: <FaArrowTrendUp />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Daily Drawdown",
    value: "-1.12%",
    icon: <FaArrowTrendDown />,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Profit Target",
    value: "68%",
    icon: <FaBullseye />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function AccountOverview() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-blue-600"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-500">
                {item.title}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                {item.value}
              </h2>
            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
            >
              <div className={`text-2xl ${item.color}`}>
                {item.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}