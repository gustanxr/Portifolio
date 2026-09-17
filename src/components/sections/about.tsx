import { site } from "@/config/site";
import Link from "next/link";

export function About() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="page-container grid grid-cols-2 gap-20 py-[105px] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:py-16">
      <div><span className="eyebrow">02 / SOBRE</span><h2 id="titulo-sobre" className="section-title">Uma trajetória<br />em movimento.</h2></div>
      <div className="pt-5 max-[760px]:pt-0">
        {site.about.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "mb-5 text-[17px] leading-[1.8]" : "mb-5 text-base leading-[1.8] text-muted"}>{paragraph}</p>)}
        <Link href="/sobre/" className="primary-link mt-7 max-[380px]:gap-5">Conheça minha trajetória <span aria-hidden="true" className="text-2xl">⇀</span></Link>
      </div>
    </section>
  );
}
