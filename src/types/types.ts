export interface PropsConstructor {
  [key: string | number | symbol]: never;
}

export interface Article {
  author?: string;
  content?: string;
  description?: string;
  publishetAt?: string;
  source?: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ResponseJSON {
  status: boolean;
  totalResults: number;
  articles: Article[];
}
