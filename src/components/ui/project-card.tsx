import type { Project } from "@/types/project";
import { TechnologyIcon } from "@/components/ui/technology-icon";

export function ProjectCard({ project, number }: { project: Project; number: number }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-8">
      <div className="eyebrow flex items-center gap-3">
        <span className="shrink-0 text-accent" aria-label={`Projeto ${number}`}>{String(number).padStart(2, "0")}</span>
        <span aria-hidden="true">·</span>
        <span>Gustavo Fiorillo / Dev</span>
      </div>
      <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>
      <ul aria-label="Tecnologias utilizadas" className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="inline-flex items-center gap-2 rounded border border-accent/25 px-2.5 py-1 text-sm text-accent">
            <TechnologyIcon technology={technology} />
            {technology}
          </li>
        ))}
      </ul>
      {(project.repositoryUrl || project.liveUrl) && (
        <div className="mt-auto flex flex-wrap gap-6 pt-8 text-sm text-accent">
          {project.repositoryUrl && <a className="hover:underline" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} (abre em nova aba)`}>Ver código ↪︎</a>}
          {project.liveUrl && <a className="hover:underline" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.title} (abre em nova aba)`}>Visitar projeto ↗</a>}
        </div>
      )}
    </article>
  );
}
