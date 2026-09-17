const technologyNames: Record<string, string> = {
  next: "Next.js", nextjs: "Next.js",
  react: "React", reactjs: "React",
  typescript: "TypeScript", ts: "TypeScript",
  tailwind: "Tailwind CSS", tailwindcss: "Tailwind CSS",
  java: "Java",
  javascript: "JavaScript", js: "JavaScript",
  html: "HTML", html5: "HTML",
  css: "CSS", css3: "CSS",
};

export type Technology = string;

export function TechnologyIcon({ technology: name }: { technology: Technology }) {
  const key = name.trim().toLowerCase().replace(/[.\s-]/g, "");
  const technology = Object.hasOwn(technologyNames, key) ? technologyNames[key] : undefined;
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5 shrink-0">
      {technology === "Java" && (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 9c-4-3 5-3 2-7M14 10c-2-2 4-3 3-5M5 12h12l-1 6c-2 2-8 2-10 0l-1-6ZM17 12h2a2 2 0 0 1 0 4h-2M4 21c4 2 12 2 16-1" />
        </g>
      )}
      {technology === "JavaScript" && (
        <>
          <rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 10v8c0 3-5 3-5 0m15-6c-1-3-6-2-6 1 0 3 6 2 6 5 0 3-5 3-6 0" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}
      {(technology === "HTML" || technology === "CSS") && (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M3 2h18l-2 18-7 2-7-2L3 2Z" />
          {technology === "HTML"
            ? <path d="M17 6H7l.5 6H16l-.5 5-3.5 1-3.5-1-.2-2" />
            : <path d="M7 6h10l-.5 6H8m8.5 0-.5 5-4 1-3.5-1-.2-2" />}
        </g>
      )}
      {!technology && (
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {technology === "Next.js" && (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 16V8l11 13M16 8v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </>
      )}
      {technology === "React" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
        </g>
      )}
      {technology === "TypeScript" && (
        <>
          <rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 10h8m-4 0v10m12-8c-1-3-6-2-6 1 0 3 6 2 6 5 0 3-5 3-6 0" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}
      {technology === "Tailwind CSS" && (
        <path fill="currentColor" d="M12 5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5 1.2 1.2 2.6 2.5 5.6 2.5 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5C16.4 6.3 15 5 12 5ZM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5C7.6 17.7 9 19 12 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5C10.4 13.3 9 12 6 12Z" />
      )}
    </svg>
  );
}
