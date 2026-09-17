export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  repositoryUrl?: `https://${string}`;
  liveUrl?: `https://${string}`;
};