export default function SecurityCard() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Security
      </h2>

      <div className="space-y-4">

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left">
          Change Password
        </button>

        <button className="w-full rounded-lg bg-zinc-800 p-3 text-left">
          Two Factor Authentication
        </button>

        <button className="w-full rounded-lg bg-red-600 p-3 text-white">
          Logout All Devices
        </button>

      </div>

    </section>
  );
}