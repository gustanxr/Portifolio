"use client";

import { useState } from "react";
import type { Project } from "@/types/project";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

export function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  const [previewLoaded, setPreviewLoaded] = useState(false);

  return (
    <article className="mx-auto flex w-full max-w-[626px] min-w-0 flex-col border-t border-accent/50 bg-surface p-6 max-[760px]:p-5">
      {project.liveUrl && (
        <div className="project-preview relative mx-auto mb-5 w-[576px] max-w-full overflow-hidden rounded-md bg-background">
          {previewLoaded && active ? (
            <>
              <iframe
                src={project.liveUrl}
                title={`Prévia ao vivo de ${project.title}`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden="true"
                className="project-preview-frame pointer-events-none border-0 bg-white"
              />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o site de ${project.title} em nova aba`}
                className="absolute inset-0 flex items-end justify-end p-3 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
              >
                <span className="inline-flex items-center gap-1.5 rounded bg-background/90 px-3 py-1.5 text-xs text-accent">Abrir site <ArrowUpRightIcon className="size-3.5" /></span>
              </a>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setPreviewLoaded(true)}
              aria-label={`Carregar prévia do site ${project.title}`}
              className="absolute inset-0 flex w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_center,#352348_0%,#101016_70%)] p-5 text-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
            >
              <span className="font-display text-[clamp(24px,5vw,38px)] font-semibold tracking-tight text-foreground">{project.title}</span>
              <span className="border-b border-accent/50 pb-1 text-sm text-accent">Carregar prévia do site <ArrowUpRightIcon className="ml-1 inline size-4" /></span>
            </button>
          )}
        </div>
      )}
      <p className="eyebrow mb-3">{project.liveUrl ? "Na web" : "Caderno de estudos"}</p>
      <h3 className="font-display text-3xl tracking-tight">{project.title}</h3>
      <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-muted">{project.description}</p>
      <ul aria-label="Tecnologias utilizadas" className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="inline-flex items-center gap-2 border-b border-line py-1 mr-2 text-xs text-muted">
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
