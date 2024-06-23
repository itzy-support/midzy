export interface Contents {
  entry: string;
  page: number;
}

export interface MessageBook {
  id: number;
  title: string;
  description: string;
  path: string;
  photos: string[];
  pages: number;
  pdf: string;
  contents: Contents[];
}
