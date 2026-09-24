import type { Project } from "@/types/project";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

export function ProjectCard({ project, number }: { project: Project; number: number }) {
  return (
    <article className="mx-auto flex w-fit max-w-full flex-col rounded-lg border border-line bg-surface p-6 max-[760px]:p-5">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir o site de ${project.title} em nova aba`}
          className="project-preview group relative mx-auto mb-5 block w-[576px] max-w-full overflow-hidden rounded-md bg-background focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
        >
          <iframe
            src={project.liveUrl}
            title={`Prévia ao vivo de ${project.title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            className="project-preview-frame pointer-events-none border-0 bg-white"
          />
          <span className="absolute right-3 bottom-3 rounded bg-background/90 px-3 py-1.5 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="inline-flex items-center gap-1.5">Abrir site <ArrowUpRightIcon className="size-3.5" /></span>
          </span>
        </a>
      )}
      <div className="eyebrow flex items-center gap-3">
        <span className="shrink-0 text-accent" aria-label={`Projeto ${number}`}>{String(number).padStart(2, "0")}</span>
        <span aria-hidden="true">·</span>
        <span>Gustavo Fiorillo / Dev</span>
      </div>
      <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
      <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-muted">{project.description}</p>
      <ul aria-label="Tecnologias utilizadas" className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="inline-flex items-center gap-2 rounded border border-accent/25 px-2.5 py-1 text-sm text-accent">
            <TechnologyIcon technology={technology} />
            {technology}
          </li>
        ))}
      </ul>
      {(project.repositoryUrl || project.liveUrl) && (
        <div className="mt-auto flex flex-wrap gap-6 pt-6 text-sm text-accent">
          {project.repositoryUrl && <a className="inline-flex items-center gap-1.5 hover:underline" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} (abre em nova aba)`}>Ver código <ArrowUpRightIcon className="size-3.5" /></a>}
          {project.liveUrl && <a className="inline-flex items-center gap-1.5 hover:underline" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.title} (abre em nova aba)`}>Visitar projeto <ArrowUpRightIcon className="size-3.5" /></a>}
        </div>
      )}
    </article>
  );
}
