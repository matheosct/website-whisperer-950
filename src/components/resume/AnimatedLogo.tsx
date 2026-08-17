import { profile } from "@/lib/resume-data";

const [first, ...rest] = profile.name.split(" ");
const last = rest.join(" ");

export function AnimatedLogo() {
  return (
    <a
      href="/"
      aria-label={`${profile.name} — início`}
      className="group inline-flex flex-col leading-[0.92] logo-animate"
    >
      <span className="flex items-center gap-2">
        <span
          aria-hidden
          className="logo-mark relative flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.4rem] border border-foreground/25 font-mono text-[0.6rem] font-bold tracking-tight text-foreground"
        >
          <span className="logo-mark-fill absolute inset-0 rounded-[0.3rem] bg-foreground" />
          <span className="relative logo-mark-initials">
            {first[0]}
            {last ? last[0] : ""}
          </span>
        </span>
        <span className="text-name font-medium tracking-tight text-foreground">
          {first.split("").map((char, i) => (
            <span
              key={`f-${i}`}
              className="logo-char inline-block"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
      <span className="text-name font-bold tracking-tight text-foreground">
        {`${last}.`.split("").map((char, i) => (
          <span
            key={`l-${i}`}
            className="logo-char inline-block"
            style={{ animationDelay: `${(first.length + i) * 45}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="logo-underline mt-2 block h-px w-10 origin-left bg-foreground/60" />
    </a>
  );
}
