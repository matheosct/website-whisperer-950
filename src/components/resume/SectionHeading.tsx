export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span className="font-mono text-label text-muted-foreground">{index}/</span>
      <h2 className="text-label font-bold tracking-[0.18em] uppercase text-foreground">
        {title}
      </h2>
    </div>
  );
}
