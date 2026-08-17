import { createFileRoute } from "@tanstack/react-router";

import { ProjectsCarousel } from "@/components/resume/ProjectsCarousel";
import { SectionHeading } from "@/components/resume/SectionHeading";
import { SidebarProfile } from "@/components/resume/SidebarProfile";
import { SkillsRow } from "@/components/resume/SkillsRow";
import { ThemeToggle } from "@/components/resume/ThemeToggle";
import { TimelineList } from "@/components/resume/TimelineList";
import { about, education, experience, profile } from "@/lib/resume-data";

const title = `${profile.name} — Product Designer & UX/UI Designer`;
const description =
  "Currículo online de product designer e UX/UI designer: perfil, habilidades, projetos de interface, formação acadêmica e experiência profissional.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground md:flex">
      <ThemeToggle />
      <SidebarProfile />

      <main className="flex-1 px-6 py-12 md:px-14 md:py-16 lg:px-20">
        <div className="max-w-3xl">
          <section className="mb-20">
            <SectionHeading index="01" title="Perfil" />
            <p className="text-lead font-medium text-foreground">
              Product designer com foco em <strong className="font-bold">UX/UI</strong>,{" "}
              <strong className="font-bold">design systems</strong> e produtos digitais orientados a
              pesquisa.
            </p>
            <div className="mt-6 border-t border-border pt-6">
              {about.map((paragraph) => (
                <p key={paragraph} className="mb-3 text-body text-muted-foreground last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeading index="02" title="Habilidades" />
            <SkillsRow />
          </section>

          <section className="mb-20">
            <SectionHeading index="03" title="Projetos" />
            <ProjectsCarousel />
          </section>

          <section className="mb-20">
            <SectionHeading index="04" title="Formação" />
            <TimelineList entries={education} />
          </section>

          <section>
            <SectionHeading index="05" title="Experiência" />
            <TimelineList entries={experience} />
          </section>
        </div>
      </main>
    </div>
  );
}
