import { site } from "@/config/site";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo" className="page-container pt-[51px] max-[760px]:pt-8">
      <div className="flex items-center justify-between gap-6">
        <span className="eyebrow uppercase">{site.name} / Portfólio pessoal</span>
        <span className="font-mono text-xs tracking-widest text-muted max-[760px]:hidden">UM ESPAÇO EM CONSTRUÇÃO</span>
      </div>
      <h1 id="titulo" className="mt-[43px] mb-[35px] text-[clamp(48px,6.9vw,92px)] leading-[1.04] font-medium tracking-[-0.055em] max-[760px]:my-8 max-[760px]:text-[clamp(38px,8.7vw,66px)]">
        Ideias ganham forma.<br /><span className="text-accent">Projetos contam<br />histórias.</span>
      </h1>
      <div className="flex items-center justify-between gap-10 pb-[58px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-6 max-[760px]:pb-9">
        <p className="max-w-[440px] text-[17px] leading-[1.7] text-muted">{site.introduction}</p>
        <a className="primary-link shrink-0" href="#projetos">Explorar projetos <ArrowUpRightIcon className="size-5" /></a>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-line py-5 font-mono text-xs tracking-[0.08em] text-muted">
        <span>CRIAÇÃO · APRENDIZADO · EVOLUÇÃO</span><span aria-hidden="true" className="text-xl text-accent">↓</span>
      </div>
    </section>
  );
}
