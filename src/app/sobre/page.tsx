import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/config/site";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right-icon";

export const metadata: Metadata = {
  title: "Sobre mim — Gustavo Fiorillo",
  description: "Conheça a trajetória de Gustavo Fiorillo: formação em TI pelo SENAC, conhecimentos em C# e .NET, interesse em Fullstack e DevOps e experiência com atendimento ao público.",
};

const skills = [
  { title: "Desenvolvimento", description: "Conhecimentos em desenvolvimento de APIs com C#, .NET 8.0 e Swagger, além de desenvolvimento front-end. Atualmente, também estudo Java.", tags: ["C#", "Java", ".NET 8.0", "Swagger", "Front-end"] },
  { title: "Dados e infraestrutura", description: "Desenvolvimento e manipulação de bancos de dados com SQL Server Management Studio, com estudos em redes, infraestrutura e manutenção de hardware.", tags: ["SQL Server", "Redes", "Infraestrutura", "Hardware"] },
  { title: "Pessoas e processos", description: "Comunicação clara, empatia e adaptabilidade no atendimento. Resiliência para lidar com desafios e conhecimento sobre Scrum.", tags: ["Comunicação", "Empatia", "Resolução de problemas", "Scrum"] },
];

export default function AboutPage() {
  return (
    <>
      <Header variant="about" />
      <main id="conteudo">
        <section id="inicio" aria-labelledby="titulo-sobre" className="page-container py-16 max-[760px]:py-10">
          <div className="grid grid-cols-[1.4fr_1fr] items-start gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-9">
            <div>
              <p className="eyebrow">Sobre mim</p>
              <h1 id="titulo-sobre" className="mt-6 font-display text-[clamp(46px,5.7vw,76px)] leading-[1.06] font-normal tracking-[-0.05em]">Muito prazer,<br /><span className="font-display font-semibold text-accent">Gustavo.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-[1.8] text-muted">Sou Gustavo Fiorillo. Atualmente, curso Engenharia de Software na Universidade São Judas Tadeu (USJT) e estudo Java. Tenho interesse em Fullstack e DevOps: quero entender a aplicação inteira, da interface à publicação. Busco uma oportunidade para colocar meus conhecimentos em prática.</p>
            </div>
            <aside aria-label="Meu perfil" className="border-l border-accent/60 bg-surface p-8 max-[760px]:p-6">
              <div aria-hidden="true" className="about-monogram mb-8"><span>g.</span></div>
              <p className="text-2xl font-medium tracking-tight">Gustavo Fiorillo</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">Tecnologia da Informação</p>
              <dl className="mt-8 space-y-5 border-t border-line pt-6 text-sm">
                <div><dt className="text-muted">Formação</dt><dd className="mt-1">Engenharia de Software · USJT</dd></div>
                <div><dt className="text-muted">Áreas de interesse</dt><dd className="mt-1 leading-relaxed">{site.interests.map((interest) => interest.title).join(" e ")}</dd></div>
                <div><dt className="text-muted">Meu próximo passo</dt><dd className="mt-1 leading-relaxed">Conseguir uma oportunidade em desenvolvimento</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="minha-trajetoria" aria-labelledby="titulo-trajetoria" className="page-container grid grid-cols-[1fr_1.3fr] gap-16 border-t border-line py-20 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:py-14">
          <div><p className="eyebrow">Minha trajetória</p><h2 id="titulo-trajetoria" className="section-title">Como cheguei<br />até aqui.</h2></div>
          <div className="space-y-5 text-[17px] leading-[1.8] text-muted">
            <p>Na minha formação em TI pelo SENAC, estudei programação de soluções computacionais, desenvolvimento em C#, redes, infraestrutura e manutenção de hardware. Também desenvolvi conhecimentos em APIs com .NET 8.0 e Swagger, front-end e manipulação de bancos de dados.</p>
            <p>Minha experiência com atendimento ao público envolve análise de crédito, vendas de seguros e resolução de problemas financeiros. Também atuei no registro e acompanhamento de pedidos e na realização de pesquisas de satisfação.</p>
            <p>Essas vivências me ensinaram a compreender necessidades, lidar com diferentes situações e me comunicar com clareza com clientes e fornecedores. Quero unir essa experiência aos meus conhecimentos técnicos para contribuir com soluções úteis e seguir aprendendo.</p>
          </div>
        </section>

        <section id="competencias" aria-labelledby="titulo-competencias" className="page-container border-t border-line py-20 max-[760px]:py-14">
          <p className="eyebrow">Conhecimentos</p><h2 id="titulo-competencias" className="section-title">O que já estudei e pratiquei.</h2>
          <div className="mt-10 divide-y divide-line">
            {skills.map((skill) => (
              <article key={skill.title} className="grid grid-cols-[1fr_1.4fr_1fr] items-start gap-8 py-8 max-[900px]:grid-cols-1 max-[900px]:gap-4">
                <h3 className="text-xl font-medium tracking-tight">{skill.title}</h3>
                <p className="text-sm leading-[1.8] text-muted">{skill.description}</p>
                <ul aria-label={`Conhecimentos em ${skill.title.toLowerCase()}`} className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => <li key={tag} className="border-b border-line py-2 mr-3 text-xs text-muted">{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" aria-labelledby="titulo-formacao" className="page-container grid grid-cols-[1fr_1.3fr] gap-16 border-t border-line py-20 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-14">
          <div><p className="eyebrow">Formação</p><h2 id="titulo-formacao" className="section-title">Onde tenho<br />aprendido.</h2></div>
          <ol className="space-y-9 border-l border-line pl-7">
            <li><p className="font-mono text-xs text-accent">EM ANDAMENTO</p><h3 className="mt-3 text-xl font-medium">Engenharia de Software</h3><p className="mt-2 text-muted">Universidade São Judas Tadeu (USJT)</p></li>
            <li><p className="font-mono text-xs text-accent">2023 — 2025</p><h3 className="mt-3 text-xl font-medium">Curso profissionalizante em TI</h3><p className="mt-2 text-muted">SENAC</p><p className="mt-4 text-sm leading-[1.8] text-muted">Estudos em programação de soluções computacionais, desenvolvimento C#, redes e infraestrutura e manutenção de hardware.</p></li>
            <li><p className="font-mono text-xs text-accent">2021 — 2023</p><h3 className="mt-3 text-xl font-medium">Ensino médio completo</h3><p className="mt-2 text-muted">Rev. Tercio Moraes Pereira</p></li>
          </ol>
        </section>

        <section id="proximos-passos" aria-labelledby="titulo-conversa" className="page-container pb-20 max-[760px]:pb-14">
          <div className="flex items-center justify-between gap-8 border-t border-accent/50 bg-surface p-10 max-[760px]:flex-col max-[760px]:items-start max-[760px]:p-6">
            <div><p className="eyebrow">Contato</p><h2 id="titulo-conversa" className="section-title">Vamos conversar?</h2><p className="mt-4 max-w-lg text-base leading-relaxed text-muted">Tem uma oportunidade em desenvolvimento ou quer conversar sobre algum projeto? Pode me chamar pelo LinkedIn.</p></div>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="primary-link shrink-0" aria-label="Conversar pelo LinkedIn (abre em nova aba)">Meu LinkedIn <ArrowUpRightIcon className="size-4" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
