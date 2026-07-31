import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  children,
}: Props) {
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">

        {children}

      </div>

    </main>
  );
}