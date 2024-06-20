export interface Contents {
  entry: string;
  page: number;
}

export interface MessageBook {
  id: number;
  title: string;
  description: string;
  cover: string;
  photo: string;
  contents: Contents[];
}
