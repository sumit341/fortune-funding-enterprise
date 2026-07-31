import type { Resource } from "../../../api/resources.api";

interface Props {
  resource: Resource;
}

export default function ResourceCard({ resource }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h3 className="text-lg font-semibold">
        {resource.title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {resource.category}
      </p>

      <a
        href={resource.fileUrl}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Download
      </a>

    </div>
  );
}