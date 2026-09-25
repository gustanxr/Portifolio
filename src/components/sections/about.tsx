import { site } from "@/config/site";
import Link from "next/link";

export function About() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="page-container grid grid-cols-2 gap-20 py-[105px] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:py-16">
      <div data-reveal><span className="eyebrow">Além do código</span><h2 id="titulo-sobre" className="section-title">Um pouco<br />sobre mim.</h2></div>
      <div data-reveal className="pt-5 max-[760px]:pt-0">
        {site.about.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "mb-5 text-[17px] leading-[1.8]" : "mb-5 text-base leading-[1.8] text-muted"}>{paragraph}</p>)}
        <div className="mt-8">
          <Link href="/sobre/" scroll={false} className="primary-link trajectory-link" aria-describedby="trajetoria-descricao">
            Mais sobre minha trajetória
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
          </Link>
          <p id="trajetoria-descricao" className="mt-3 text-sm leading-relaxed text-muted">Conheça minha história, formação e competências.</p>
        </div>
      </div>
    </section>
  );
}
