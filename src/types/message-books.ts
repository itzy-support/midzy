export interface Contents {
  entry: string;
  page: number;
  index: number | undefined;
  hidden: boolean | undefined;
}

export interface MessageBook {
  id: number;
  title: string;
  description: string;
  date: string;
  path: string;
  photos: number;
  pages: number | undefined;
  textColor: string;
  bgColor: string;
  pdf: string | undefined;
  contents: Contents[] | undefined;
}
