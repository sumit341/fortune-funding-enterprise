export default function PerformanceChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-5 text-xl font-semibold text-white">
        Performance
      </h2>

      <div className="flex h-80 items-end justify-between gap-2">

        {[35,55,40,72,58,90,68,95,78,88,100,92].map(
          (value,index)=>(
            <div
              key={index}
              className="flex flex-1 items-end"
            >
              <div
                className="w-full rounded-t-lg bg-blue-600 transition hover:bg-blue-500"
                style={{
                  height:`${value}%`,
                }}
              />
            </div>
          )
        )}

      </div>

      <div className="mt-4 flex justify-between text-xs text-zinc-500">

        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>

      </div>

    </div>
  );
}