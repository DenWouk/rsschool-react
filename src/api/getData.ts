import { ResponceDataInterface } from '../types/types';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '0f3f7d182c0840a4997f1f88ea60397c';

export async function getData(query: string, page: number, pageSize: number) {
  const response: Response = await fetch(
    `${API_URL}?q=${query}&sortBy=relevancy&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
  );

  const data: ResponceDataInterface = await response.json();

  return data.articles;
}
