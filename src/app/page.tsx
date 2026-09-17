import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo"><Hero /><Projects /><About /></main>
      <Footer />
    </>
  );
}
