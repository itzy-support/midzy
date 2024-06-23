export interface Contents {
  entry: string;
  page: number;
  index: number;
  hidden: boolean;
}

export interface MessageBook {
  id: number;
  title: string;
  description: string;
  date: string;
  path: string;
  photos: number;
  pages: number;
  pdf: string;
  contents: Contents[];
}
