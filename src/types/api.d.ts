export type ProceduralTrainerCardType = {
  id: string | number;
  percentage: number;
  title: string;
  subtitle: string;
  image: string;
  // links: {
  //   flyLink: string;
  //   starLink: string;
  // };
};

export type RecentProceduresCardType = {
  id: string | number;
  title: string;
  subtitle: string;
  stars: number;
  image?: string;
};

export type ProceduresDetailsType = {
  title: string;
  subtitle: string;
  stars: number;
  percentage: number;
  description: string;
};

export type ProcedureType = {
  id: string;
  title: string;
  progress: ProceduralTrainerProgressType[];
};

export type ProceduralTrainerProgressType = {
  id: string;
  locked: boolean;
  title: string;
  subtitle: string;
  stars: number;
  percentage: number;
  description: string;
};
