const events = [
  {
    time: "09:30",
    country: "🇬🇧",
    event: "CPI",
    impact: "High",
  },
  {
    time: "13:30",
    country: "🇺🇸",
    event: "Non-Farm Payroll",
    impact: "High",
  },
  {
    time: "15:00",
    country: "🇺🇸",
    event: "ISM Manufacturing PMI",
    impact: "Medium",
  },
  {
    time: "18:00",
    country: "🇪🇺",
    event: "ECB Speech",
    impact: "Low",
  },
];

export default function EconomicCalendar() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Economic Calendar
      </h2>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={`${event.time}-${event.event}`}
            className="flex items-center justify-between rounded-xl bg-zinc-950 p-4"
          >
            <div>
              <p className="font-medium text-white">
                {event.country} {event.event}
              </p>

              <p className="text-sm text-zinc-500">
                {event.time}
              </p>
            </div>

            <span
              className={`font-semibold ${
                event.impact === "High"
                  ? "text-red-400"
                  : event.impact === "Medium"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {event.impact}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}