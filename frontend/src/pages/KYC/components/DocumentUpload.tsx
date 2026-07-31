interface Props {
  label: string;
}

export default function DocumentUpload({
  label,
}: Props) {
  return (
    <div>

      <label className="mb-2 block">
        {label}
      </label>

      <input
        type="file"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      />

    </div>
  );
}