"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

export function Header({ variant = "home" }: { variant?: "home" | "about" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="sticky top-0 z-50 border-b border-line/60 bg-background/65 backdrop-blur-xl backdrop-saturate-150"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <div className="page-container flex min-h-20 items-center justify-between gap-6 py-3 max-[1000px]:min-h-16 max-[1000px]:py-2">
      {variant === "about" ? (
        <Link href="/" onClick={() => setMenuOpen(false)} className="inline-flex shrink-0 items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-bold text-background hover:bg-accent-hover">
          <span aria-hidden="true">←</span> Voltar ao início
        </Link>
      ) : (
      <Link href="/#inicio" onClick={() => setMenuOpen(false)} aria-label={`${site.name} — início`} className="inline-flex items-center text-[23px] font-bold tracking-[-1px] hover:text-accent">
        <span aria-hidden="true" className="mr-3 grid size-9 place-items-center rounded-[10px] bg-accent pb-1 text-[26px] text-background">g.</span>
        {site.name}<span className="text-accent">.</span>
      </Link>
      )}
      <button
        ref={menuButton}
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="header-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
        className="hidden size-11 items-center justify-center rounded-md border border-line text-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-[1000px]:inline-flex"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-6">
          <path d={menuOpen ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      <nav
        id="header-navigation"
        aria-label={variant === "about" ? "Seções sobre mim" : "Navegação principal"}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
        }}
        className={`flex items-center gap-8 text-sm max-[1000px]:absolute max-[1000px]:inset-x-0 max-[1000px]:top-full max-[1000px]:flex-col max-[1000px]:items-stretch max-[1000px]:gap-1 max-[1000px]:border-b max-[1000px]:border-line max-[1000px]:bg-background/95 max-[1000px]:px-5 max-[1000px]:py-3 max-[1000px]:shadow-xl max-[1000px]:[&>a]:rounded-md max-[1000px]:[&>a]:px-3 max-[1000px]:[&>a]:py-3 ${menuOpen ? "" : "max-[1000px]:hidden"}`}
      >
        {variant === "about" ? (
          <>
            <a className="whitespace-nowrap hover:text-accent" href="#minha-trajetoria">Minha trajetória</a>
            <a className="whitespace-nowrap hover:text-accent" href="#competencias">Competências</a>
            <a className="whitespace-nowrap hover:text-accent" href="#formacao">Formação</a>
            <a className="whitespace-nowrap hover:text-accent" href="#proximos-passos">Próximos passos</a>
          </>
        ) : (
          <>
        <Link className="hover:text-accent" href="/#projetos">Projetos</Link>
        <Link className="hover:text-accent" href="/#sobre">Sobre mim</Link>
          </>
        )}
        <a className="inline-flex items-center gap-2 hover:text-accent" href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
          <span
            aria-hidden="true"
            className="size-5 shrink-0 bg-current"
            style={{
              mask: "url('/github.svg') center / contain no-repeat",
              WebkitMask: "url('/github.svg') center / contain no-repeat",
            }}
          />
        </a>
        {site.linkedin && (
          <a className="inline-flex items-center gap-2 hover:text-accent" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)">
            LinkedIn
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5 shrink-0">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.53-1.54-2.53-1.54 0-1.78 1.21-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.75 1.36-1.54 2.79-1.54 2.99 0 3.56 1.97 3.56 4.53v5.26Z" />
            </svg>
          </a>
        )}
      </nav>
      </div>
    </header>
  );
}
