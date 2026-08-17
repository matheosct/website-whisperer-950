import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { ProjectDialog } from "@/components/resume/ProjectDialog";
import { projects, type Project } from "@/lib/resume-data";

export function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-3">
        <span className="font-mono text-label text-muted-foreground">
          Deslize para ver →
        </span>
        <button
          type="button"
          aria-label="Projetos anteriores"
          onClick={() => scrollBy(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Próximos projetos"
          onClick={() => scrollBy(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group w-[240px] shrink-0 snap-start sm:w-[280px]"
          >
            <div className="relative overflow-hidden rounded-md border border-border">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-background/70 text-label font-bold tracking-wide text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Ver projeto <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-3 font-mono text-label tracking-[0.14em] uppercase text-muted-foreground">
              {project.category}
            </p>
            <h3 className="mt-1 text-item font-semibold text-foreground">{project.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
