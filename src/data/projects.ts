import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  // Use um slug diferente para cada projeto e uma string por tecnologia.
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
