interface Props {
  link: string;
}

export default function ReferralLink({
  link,
}: Props) {
  const copy = async () => {
    await navigator.clipboard.writeText(link);
  };

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-5 text-xl font-bold">
        Referral Link
      </h2>

      <div className="flex gap-4">

        <input
          readOnly
          value={link}
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 p-3"
        />

        <button
          onClick={copy}
          className="rounded-lg bg-blue-600 px-6 text-white"
        >
          Copy
        </button>

      </div>

    </section>
  );
}