export interface Article {
  author: string;
  content: string;
  description: string;
  publishetAt: string;
  source: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ResponseData {
  status: boolean;
  totalResults: number;
  articles: Article[];
}
