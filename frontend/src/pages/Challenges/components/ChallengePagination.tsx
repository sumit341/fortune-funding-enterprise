interface Props {
  page: number;

  totalPages: number;

  onPageChange: (
    page: number
  ) => void;
}

export default function ChallengePagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1)
    return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-4">

      <button
        disabled={page <= 1}
        onClick={() =>
          onPageChange(
            page - 1
          )
        }
        className="rounded-lg border border-zinc-700 px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={
          page >= totalPages
        }
        onClick={() =>
          onPageChange(
            page + 1
          )
        }
        className="rounded-lg border border-zinc-700 px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}