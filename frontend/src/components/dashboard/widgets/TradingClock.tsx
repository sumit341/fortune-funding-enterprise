import { useEffect, useState } from "react";

export default function TradingClock() {
  const [time, setTime] = useState(
    new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">
        Server Time
      </h2>

      <p className="text-4xl font-bold text-blue-500">
        {time.toLocaleTimeString()}
      </p>

      <p className="mt-3 text-zinc-400">
        {time.toDateString()}
      </p>
    </div>
  );
}