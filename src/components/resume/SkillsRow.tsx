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
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-label font-bold tracking-wide text-foreground"
          >
            <Icon className="h-3.5 w-3.5 text-muted-foreground" />
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
}
