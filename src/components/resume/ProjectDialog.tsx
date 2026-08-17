import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/resume-data";

type ProjectDialogProps = {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDialog({ project, onOpenChange }: ProjectDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
        {project ? (
          <>
            <DialogHeader className="text-left">
              <p className="font-mono text-label tracking-[0.14em] uppercase text-muted-foreground">
                {project.category}
              </p>
              <DialogTitle className="text-lead font-bold text-foreground">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-body text-muted-foreground">
                {project.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-2 border-y border-border py-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-label tracking-wide text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="overflow-hidden rounded-md border border-border">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-[200px] w-full object-cover sm:h-[280px]"
              />
            </div>

            <div className="space-y-4">
              {project.blocks.map((block, index) =>
                block.type === "text" ? (
                  <p key={index} className="text-body text-muted-foreground">
                    {block.content}
                  </p>
                ) : (
                  <figure key={index} className="space-y-2">
                    <img
                      src={block.src}
                      alt={block.alt}
                      loading="lazy"
                      className="w-full rounded-md border border-border object-cover"
                    />
                    {block.caption ? (
                      <figcaption className="font-mono text-label text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ),
              )}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
