import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-400">
      {items.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-2"
        >
          {index > 0 && (
            <ChevronRight className="h-4 w-4" />
          )}

          <span
            className={
              index === items.length - 1
                ? "font-semibold text-white"
                : ""
            }
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}