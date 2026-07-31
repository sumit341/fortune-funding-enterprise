import { useState } from "react";
import type { FaqItem } from "../../../api/faq.api";

interface Props {
  item: FaqItem;
}

export default function FaqAccordion({
  item,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900">

      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 text-left font-semibold"
      >
        {item.question}
      </button>

      {open && (
        <div className="border-t border-zinc-800 p-5 text-zinc-400">
          {item.answer}
        </div>
      )}

    </div>
  );
}