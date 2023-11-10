export interface ArticleInterface {
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

export interface ResponceDataInterface {
  status?: boolean;
  totalResults?: number;
  articles: ArticleInterface[];
}
