import { useState } from "react";

interface Props {
  onSearch(id: string): void;
}

export default function CertificateSearch({
  onSearch,
}: Props) {
  const [value, setValue] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!value.trim()) return;

    onSearch(value.trim());
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">
        Verify Certificate
      </h2>

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Certificate ID"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
        Verify
      </button>
    </form>
  );
}