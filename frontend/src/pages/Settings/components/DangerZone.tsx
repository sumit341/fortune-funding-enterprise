export default function DangerZone() {
  return (
    <section className="rounded-xl border border-red-700 bg-zinc-900 p-6">

      <h2 className="mb-4 text-xl font-bold text-red-500">
        Danger Zone
      </h2>

      <p className="mb-6 text-zinc-400">
        Permanently delete your account and all associated data.
      </p>

      <button className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700">
        Delete Account
      </button>

    </section>
  );
}