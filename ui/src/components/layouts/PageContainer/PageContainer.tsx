import * as React from "react";

import { cn } from "../../../utils/cn";

export type PageContainerProps =
  React.HTMLAttributes<HTMLDivElement>;

export function PageContainer({
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-auto bg-zinc-950",
        "px-6 py-6",
        "lg:px-8",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {children}
      </div>
    </main>
  );
}