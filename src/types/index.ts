// Project categories
export type ProjectCategory = "All" | "Web" | "Mobile" | "AI" | "Games";

// Project type definition
export interface Project {
  title: string;
  mainImage: string;
  description: string;
  tech: JSX.Element[];
  liveDemo: string;
  github: string;
  galleryImages: string[];
  category: ProjectCategory;
}

// Certificate type definition
export interface Certificate {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date: string;
}
