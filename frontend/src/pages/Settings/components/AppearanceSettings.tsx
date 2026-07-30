export default function AppearanceSettings() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Appearance
      </h2>

      <label className="block mb-2">
        Theme
      </label>

      <select
        defaultValue="dark"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      >
        <option value="dark">
          Dark
        </option>

        <option value="light">
          Light
        </option>

        <option value="system">
          System
        </option>

      </select>

    </section>
  );
}