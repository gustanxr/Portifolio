import { projects } from "@/data/projects";
import { ProjectCarousel } from "@/components/ui/project-carousel";

export function Projects() {
  const hasProjects = projects.length > 0;
  return (
    <section id="projetos" aria-labelledby="titulo-projetos" className="page-container border-t border-line pt-14 max-[760px]:pt-11">
      <div className="mb-[34px] flex items-end justify-between gap-6 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-4">
        <div><span className="eyebrow">Feitos por mim</span><h2 id="titulo-projetos" className="section-title">Projetos & estudos.</h2></div>
        <p className="pb-1 text-sm text-muted">{hasProjects ? "Sites publicados e exercícios de programação." : "Os próximos projetos vão aparecer aqui."}</p>
      </div>
      {hasProjects ? (
        <ProjectCarousel projects={projects} />
      ) : (
        <div className="relative flex min-h-[260px] items-center gap-8 rounded-lg border border-line bg-surface p-[42px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-7">
          <span aria-hidden="true" className="grid size-[76px] shrink-0 place-items-center rounded-full border border-dashed border-accent/40 text-[34px] text-accent max-[760px]:mb-6 max-[760px]:size-[50px]">+</span>
          <div>
            <span className="inline-block rounded border border-accent/30 bg-accent/5 px-2 py-1.5 font-mono text-xs tracking-widest text-accent">EM BREVE</span>
            <h3 className="mt-5 mb-3 text-[25px] leading-tight font-medium tracking-tight">O primeiro projeto começa aqui.</h3>
            <p className="max-w-[440px] text-[15px] leading-[1.7] text-muted">Novos trabalhos vão ocupar este espaço, com suas ideias, processos e resultados.</p>
          </div>
        </div>
      )}
    </section>
  );
}
