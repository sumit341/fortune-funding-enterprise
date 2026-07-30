interface Props {
  language: string;
}

export default function GeneralSettings({
  language,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        General
      </h2>

      <label className="mb-2 block">
        Language
      </label>

      <select
        defaultValue={language}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      >
        <option value="en">
          English
        </option>

        <option value="hi">
          Hindi
        </option>

      </select>

    </section>
  );
}