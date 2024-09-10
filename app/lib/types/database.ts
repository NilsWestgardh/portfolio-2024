export type Award = {
  award: string;
  category: string;
  show: string;
  year: string;
};

export type Project = {
  id: string;
  path: string;
  title: string;
  product: string;
  client: string;
  year: number;
  role: string;
  problem: string;
  solution: string;
  insight: string;
  audience: string;
  description: string;
  link?: string;
  hero: string;
  images: string[];
  video: string;
  awards: Award[];
  skills: string[];
};

export type Projects = Project[];

export type Skill = {
  id?: number;
  skill: string;
  level: string;
}

export type Skills = Skill[];

export type Client = {
  id?: number;
  client: string;
  logo: string;
  url: string;
}

export type Clients = Client[];