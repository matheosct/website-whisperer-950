import type { TimelineEntry } from "@/lib/resume-data";

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="flex flex-col">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.period}`}
          className="border-t border-border py-6 md:grid md:grid-cols-[150px_1fr] md:gap-8"
        >
          <p className="font-mono text-label tracking-wide text-muted-foreground">
            {entry.period}
          </p>
          <div className="mt-2 md:mt-0">
            <h3 className="text-item font-semibold text-foreground">{entry.title}</h3>
            <p className="mt-1 text-body text-muted-foreground">{entry.org}</p>
            {entry.details && entry.details.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {entry.details.map((detail) => (
                  <li
                    key={detail}
                    className="relative pl-4 text-body text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
