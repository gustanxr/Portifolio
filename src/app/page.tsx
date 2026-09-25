import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { PageContent } from "@/components/layout/page-content";

export default function Home() {
  return (
    <>
      <Header />
      <PageContent><Hero /><Projects /><About /></PageContent>
      <Footer />
    </>
  );
}
