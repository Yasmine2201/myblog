export interface Repository {
  name: string;
  picture: string;
  description: string;
  deployLink: string | null;
  githubLink: string;
  technologies: string[];
}