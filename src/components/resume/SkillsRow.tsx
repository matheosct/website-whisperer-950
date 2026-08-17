import { Figma, Image, Layers, PenTool } from "lucide-react";

import { skills } from "@/lib/resume-data";

const icons: Record<string, typeof Figma> = {
  Photoshop: Image,
  Illustrator: PenTool,
  InDesign: Layers,
  Figma: Figma,
};

export function SkillsRow() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {skills.map((skill) => {
        const Icon = icons[skill.name] ?? Layers;
        return (
          <li key={skill.name}>
            <span className="group flex cursor-default items-center gap-2 rounded-full border border-border px-4 py-2 text-label font-bold tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_6px_18px_-10px_hsl(var(--foreground)/0.6)]">
              <Icon className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-background" />
              {skill.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
