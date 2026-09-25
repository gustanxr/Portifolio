import Image from "next/image";
import { site } from "@/config/site";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo" className="page-container hero-layout">
      <div>
        <p className="eyebrow"><span aria-hidden="true" className="mr-2">&gt;_</span> Oi, eu sou o Gustavo.</p>
        <h1 id="titulo" className="hero-name">Gustavo<br /><span>Fiorillo<span className="text-accent">.</span></span></h1>
        <p className="mt-5 font-mono text-sm text-accent">Desenvolvimento web & infraestrutura</p>
        <p className="mt-5 max-w-[480px] text-[17px] leading-[1.8] text-muted">{site.introduction}</p>
        <div className="mt-8 flex flex-wrap items-center gap-7">
          <a className="primary-link" href="#projetos">Ver meus projetos <ArrowUpRightIcon className="size-4" /></a>
          <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Meu GitHub (abre em nova aba)">Meu GitHub <ArrowUpRightIcon className="size-4" /></a>
        </div>
      </div>
      <figure className="developer-visual">
        <div aria-hidden="true" className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs text-muted">
          <span className="text-accent">~/gustanxr</span><span>código · café · estudo</span>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/developer-setup.webp`}
          alt="Ilustração de um notebook com editor de código, teclado e servidores conectados, em tons de roxo."
          width={1200}
          height={800}
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1216px) 46vw, 540px"
          preload
          className="block h-auto w-full"
        />
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 font-mono text-xs text-muted">
          <span>Da interface ao deploy.</span><span className="text-accent" aria-hidden="true">&lt;/&gt;</span>
        </figcaption>
      </figure>
      <aside data-reveal aria-labelledby="titulo-interesses" className="interest-note">
        <div>
          <p id="titulo-interesses" className="eyebrow">Áreas de interesse</p>
          <p className="mt-3 font-mono text-xs leading-loose text-muted">Base: C# · .NET · SQL<br />Estudando: Java</p>
        </div>
        <dl className="interest-list">
          {site.interests.map((interest) => (
            <div key={interest.title}>
              <dt className="font-mono text-xl font-semibold text-foreground">{interest.title}<span aria-hidden="true" className="ml-2 text-accent">/</span></dt>
              <dd className="mt-2 text-sm leading-[1.8] text-muted">{interest.description}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
