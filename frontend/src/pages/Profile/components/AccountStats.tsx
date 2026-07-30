export default function AccountStats() {
  const stats = [
    {
      title: "Account Balance",
      value: "$25,000",
    },
    {
      title: "Challenges",
      value: "3",
    },
    {
      title: "Orders",
      value: "126",
    },
    {
      title: "Win Rate",
      value: "71%",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-zinc-400">
            {item.title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}