import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  // Use um slug diferente para cada projeto e uma string por tecnologia.
  {
    slug: "lua-nails-site",
    title: "Lua Nails",
    description:
      "Site da Lua Nails, criado para apresentar o trabalho e facilitar o contato com o estúdio.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    repositoryUrl: "https://github.com/gustanxr/LuaNails-Site",
    liveUrl: "https://luanails-puce.vercel.app/",
  },
  {
    slug: "uc-algoritimo-logica",
    title: "Começando no Java",
    description:
      "Projeto desenvolvido para praticar algoritmos, lógica de programação e os fundamentos da linguagem Java.",
    technologies: ["Java"],
    repositoryUrl:
      "https://github.com/gustanxr/UC-Algoritimo-Logica",
  },
];
