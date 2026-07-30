interface Props {
  downloadUrl: string;
}

export default function CertificateActions({
  downloadUrl,
}: Props) {
  return (
    <div className="mt-6 flex gap-4">

      <a
        href={downloadUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Download
      </a>

      <button
        className="rounded-lg bg-zinc-800 px-5 py-3"
      >
        Share
      </button>

    </div>
  );
}