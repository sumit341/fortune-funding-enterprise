import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function LegalSection({
  title,
  children,
}: Props) {
  return (
    <section className="space-y-3">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <div className="text-zinc-400 leading-7">

        {children}

      </div>

    </section>
  );
}