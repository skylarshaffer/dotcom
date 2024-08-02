export type ProjectObject = {
  name: string;
  urls: {
    website: string;
    gitHub: string;
    demo: string;
  }
  category: string;
  description: string;
  iconUrl?: string;
  backgroundUrl?:string;
};

export type ProjectArray = ProjectObject[]

export type LinkObject = Record<string,string>

export type LinkArray = LinkObject[]

