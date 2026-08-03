import { useAuthStore } from "../../../store/auth/auth.store";

export default function ProfileSettings() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Profile Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Full Name
          </label>

          <input
            defaultValue={user?.name}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Email
          </label>

          <input
            defaultValue={user?.email}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
          />
        </div>
      </div>

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
}
