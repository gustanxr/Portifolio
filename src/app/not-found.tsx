import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="page-container flex min-h-screen flex-col items-start justify-center py-16">
      <span className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</span>
      <h1 className="section-title">Esse caminho ainda não existe.</h1>
      <p className="my-6 text-muted">Volte ao início para explorar o portfólio.</p>
      <Link href="/" className="primary-link">Voltar ao início <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
