import { Linkedin, Mail, Monitor } from "lucide-react";

import { profile } from "@/lib/resume-data";

const icons = {
  linkedin: Linkedin,
  behance: Monitor,
  mail: Mail,
};

export function SidebarProfile() {
  return (
    <aside className="border-b border-border px-6 py-10 md:sticky md:top-0 md:h-screen md:w-[320px] md:shrink-0 md:overflow-y-auto md:border-r md:border-b-0 md:px-10 md:py-14 lg:w-[360px]">
      <div className="flex h-full flex-col">
        <div>
          <h1 className="text-name font-medium tracking-tight text-foreground">
            {profile.name.split(" ")[0]}
            <br />
            <span className="font-bold">{profile.name.split(" ").slice(1).join(" ")}.</span>
          </h1>
          <p className="mt-4 font-mono text-label tracking-[0.18em] uppercase text-muted-foreground">
            {profile.role}
          </p>
          <div className="my-6 h-px w-10 bg-foreground/60" />
          <p className="max-w-[26ch] text-body text-muted-foreground">
            {profile.summary}
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-3">
          {profile.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 text-body text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground/40">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {link.label}
              </a>
            );
          })}
        </nav>

        <p className="mt-10 font-mono text-label text-muted-foreground md:mt-auto">
          {profile.location} · Currículo atualizado em 2026
        </p>
      </div>
    </aside>
  );
}
