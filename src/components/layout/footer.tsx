import { site } from "@/config/site";
import Link from "next/link";
import { TechnologyIcon, type Technology } from "@/components/ui/technology-icon";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

const technologies: readonly { name: Technology; documentation: string }[] = [
  { name: "Next.js", documentation: "https://nextjs.org/docs" },
  { name: "React", documentation: "https://react.dev/learn" },
  { name: "TypeScript", documentation: "https://www.typescriptlang.org/docs/" },
  { name: "JavaScript", documentation: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { name: "HTML", documentation: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
  { name: "CSS", documentation: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { name: "Tailwind CSS", documentation: "https://tailwindcss.com/docs" },
];

export function Footer() {
  return (
    <footer className="page-container flex flex-wrap items-center justify-between gap-6 border-t border-line py-[30px]">
      <Link className="text-xl font-bold tracking-tight hover:text-accent" href="/#inicio">{site.name}<span className="text-accent">.</span></Link>
      <p className="text-sm text-muted">Gustavo Fiorillo · Fullstack & DevOps</p>
      <a className="text-sm text-muted hover:text-accent" href="#inicio">Voltar ao topo <span aria-hidden="true" className="ml-4 text-accent">↑</span></a>
      <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6">
        <p className="font-mono text-xs tracking-wide text-muted">Desenvolvido com</p>
        <ul aria-label="Tecnologias usadas neste portfólio" className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <li key={technology.name}>
              <a
                href={technology.documentation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Documentação de ${technology.name} (abre em nova aba)`}
                className="inline-flex min-h-11 items-center gap-2 px-1 py-2 text-xs text-muted transition-[color,background-color,border-color,transform,box-shadow] duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:border-accent focus-visible:bg-accent/10 focus-visible:text-accent"
              >
                <span className="text-accent"><TechnologyIcon technology={technology.name} /></span>
                {technology.name}
                <ArrowUpRightIcon className="size-3.5 text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
