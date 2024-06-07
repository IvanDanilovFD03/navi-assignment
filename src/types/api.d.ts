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
