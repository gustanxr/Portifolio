"use client";

import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/ui/project-card";

const AUTOPLAY_DELAY = 5000;
const SWIPE_DISTANCE = 50;
const GESTURE_THRESHOLD = 10;
type TouchGesture = {
  identifier: number;
  startX: number;
  startY: number;
  axis: "horizontal" | "vertical" | null;
};
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function ProjectCarousel({ projects }: { projects: readonly Project[] }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const gestureRef = useRef<TouchGesture | null>(null);
  const suppressClickRef = useRef(false);
  const results = projects.filter((project) => normalize([project.title, project.description, ...project.technologies].join(" ")).includes(normalize(query)));
  const count = results.length;
  const current = count ? activeIndex % count : 0;

  useEffect(() => {
    if (count < 2 || paused || hovered || focused || touching) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!motion.matches && !document.hidden) {
        setActiveIndex((index) => (index + 1) % count);
      }
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [count, paused, hovered, focused, touching, activeIndex, query]);

  function cancelTouch() {
    gestureRef.current = null;
    setTouching(false);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouching(true);
    suppressClickRef.current = false;
    const touch = event.touches[0];
    gestureRef.current = event.touches.length === 1 && count > 1 ? {
      identifier: touch.identifier,
      startX: touch.clientX,
      startY: touch.clientY,
      axis: null,
    } : null;
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;
    if (!gesture) return;
    const touch = Array.from(event.touches).find(({ identifier }) => identifier === gesture.identifier);
    if (!touch) return;
    const dx = Math.abs(touch.clientX - gesture.startX);
    const dy = Math.abs(touch.clientY - gesture.startY);
    if (!gesture.axis && Math.max(dx, dy) >= GESTURE_THRESHOLD) {
      gesture.axis = dx > dy ? "horizontal" : "vertical";
    }
    // A horizontal drag must not activate the preview or project links.
    if (gesture.axis === "horizontal") suppressClickRef.current = true;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;
    if (event.touches.length > 0) {
      gestureRef.current = null;
      return;
    }
    cancelTouch();
    if (!gesture || gesture.axis === "vertical" || count < 2) return;
    const touch = Array.from(event.changedTouches).find(({ identifier }) => identifier === gesture.identifier);
    if (!touch) return;
    const dx = touch.clientX - gesture.startX;
    const dy = touch.clientY - gesture.startY;
    if (Math.abs(dx) >= SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy)) {
      suppressClickRef.current = true;
      setActiveIndex((index) => (index + (dx < 0 ? 1 : -1) + count) % count);
    }
  }

  const buttonClass = "inline-flex size-10 items-center justify-center rounded-md border border-line text-accent transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30 max-[760px]:size-8";

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
          onChange={(event) => { cancelTouch(); setQuery(event.target.value); setActiveIndex(0); }}
          placeholder="Buscar por projeto ou tecnologia..."
          className="w-full rounded-lg border border-line bg-surface py-3 pr-4 pl-12 text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
      <p role="status" className="mb-5 text-sm text-muted">{query ? (count ? "Resultados da pesquisa" : "Nenhum resultado para esta busca") : "Explore os projetos abaixo"}</p>
      {count === 0 ? (
        <div className="rounded-lg border border-dashed border-line px-6 py-12 text-center">
          <p className="text-lg">Nenhum projeto encontrado.</p>
          <p className="mt-2 text-sm text-muted">Tente outra palavra ou limpe a pesquisa.</p>
          <button type="button" onClick={() => { setQuery(""); setActiveIndex(0); }} className="mt-5 text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">Limpar pesquisa</button>
        </div>
      ) : (
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos"
          onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
          onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        >
          <div className="mx-auto grid w-full max-w-[738px] grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-4 max-[760px]:grid-cols-[32px_minmax(0,1fr)_32px] max-[760px]:gap-2">
            <button type="button" aria-label="Projeto anterior" aria-controls="project-slides" disabled={count < 2} onClick={() => setActiveIndex((current - 1 + count) % count)} className={buttonClass}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><path d="m14 6-6 6 6 6" /></svg>
            </button>
            <div
              id="project-slides"
              className="touch-pan-y touch-pinch-zoom overflow-hidden rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={cancelTouch}
              onPointerDown={() => { suppressClickRef.current = false; }}
              onClickCapture={(event) => {
                if (suppressClickRef.current && event.detail !== 0) {
                  event.preventDefault();
                  event.stopPropagation();
                  suppressClickRef.current = false;
                }
              }}
            >
              <div className="grid auto-cols-[100%] grid-flow-col items-stretch transition-transform duration-500 ease-in-out motion-reduce:transition-none" style={{ transform: `translateX(-${current * 100}%)` }}>
                {results.map((project, index) => (
                  <div key={project.slug} role="group" aria-roledescription="slide" aria-label={project.title} aria-hidden={index !== current} inert={index !== current} className="flex min-w-0">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            <button type="button" aria-label="Próximo projeto" aria-controls="project-slides" disabled={count < 2} onClick={() => setActiveIndex((current + 1) % count)} className={buttonClass}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><path d="m10 6 6 6-6 6" /></svg>
            </button>
          </div>
          <div className="mx-auto mt-5 flex max-w-[626px] flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" aria-label="Escolher projeto">
              {results.map((project, index) => (
                <button key={project.slug} type="button" aria-label={`Mostrar ${project.title}`} aria-current={current === index ? "true" : undefined} onClick={() => setActiveIndex(index)} className={`min-h-11 border-b px-3 text-xs transition-colors ${current === index ? "border-accent text-accent" : "border-transparent text-muted hover:text-foreground"}`}>
                  {project.title}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {count > 1 && (
                <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="mr-2 text-sm text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:hidden">
                  {paused ? "Retomar" : "Pausar"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
