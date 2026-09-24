"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/ui/project-card";

const AUTOPLAY_DELAY = 5000;
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function ProjectCarousel({ projects }: { projects: readonly Project[] }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const results = projects
    .map((project, index) => ({ project, number: index + 1 }))
    .filter(({ project }) => normalize(project.title).includes(normalize(query)));
  const count = results.length;
  const current = count ? activeIndex % count : 0;

  useLayoutEffect(() => {
    const slides = slidesRef.current;
    const activeSlide = slides?.children[current];
    if (!(activeSlide instanceof HTMLElement)) {
      setSlideHeight(null);
      return;
    }

    const updateHeight = () => setSlideHeight(activeSlide.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(activeSlide);
    return () => observer.disconnect();
  }, [current, count, query]);

  useEffect(() => {
    if (count < 2 || paused || hovered || focused) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!motion.matches && !document.hidden) {
        setActiveIndex((index) => (index + 1) % count);
      }
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [count, paused, hovered, focused, activeIndex, query]);

  const buttonClass = "inline-flex size-10 items-center justify-center rounded-md border border-line text-accent transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div>
      <label htmlFor="project-search" className="mb-2 block text-sm text-muted">Pesquisar projetos</label>
      <div className="relative mb-3">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pointer-events-none absolute top-3.5 left-4 size-5 text-muted">
          <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" />
        </svg>
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }}
          placeholder="Buscar pelo nome do projeto..."
          className="w-full rounded-lg border border-line bg-surface py-3 pr-4 pl-12 text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
      <p role="status" className="mb-5 text-sm text-muted">{count} {count === 1 ? "projeto encontrado" : "projetos encontrados"}</p>
      {count === 0 ? (
        <div className="rounded-lg border border-dashed border-line px-6 py-12 text-center">
          <p className="text-lg">Nenhum projeto encontrado.</p>
          <p className="mt-2 text-sm text-muted">Tente outro nome ou limpe a pesquisa.</p>
          <button type="button" onClick={() => { setQuery(""); setActiveIndex(0); }} className="mt-5 text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">Limpar pesquisa</button>
        </div>
      ) : (
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        >
          <div id="project-slides" className="overflow-hidden rounded-lg transition-[height] duration-500 ease-in-out motion-reduce:transition-none" style={slideHeight === null ? undefined : { height: `${slideHeight}px` }}>
            <div ref={slidesRef} className="flex items-start transition-transform duration-500 ease-in-out motion-reduce:transition-none" style={{ transform: `translateX(-${current * 100}%)` }}>
              {results.map(({ project, number }, index) => (
                <div key={project.slug} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${count}`} aria-hidden={index !== current} inert={index !== current} className="w-full min-w-0 shrink-0">
                  <ProjectCard project={project} number={number} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-sm text-muted">{String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
            <div className="flex items-center gap-3">
              {count > 1 && (
                <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="mr-2 text-sm text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:hidden">
                  {paused ? "Retomar" : "Pausar"}
                </button>
              )}
              <button type="button" aria-label="Projeto anterior" aria-controls="project-slides" disabled={count < 2} onClick={() => setActiveIndex((current - 1 + count) % count)} className={buttonClass}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><path d="m14 6-6 6 6 6" /></svg>
              </button>
              <button type="button" aria-label="Próximo projeto" aria-controls="project-slides" disabled={count < 2} onClick={() => setActiveIndex((current + 1) % count)} className={buttonClass}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><path d="m10 6 6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
