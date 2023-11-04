import { ResponseJSON } from '../types/types';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '0f3f7d182c0840a4997f1f88ea60397c';

export async function getData(query: string) {
  const response: Response = await fetch(
    `${API_URL}?q=${query}&sortBy=popularity&pageSize=10&page=1&apiKey=${API_KEY}`
  );

  const data: ResponseJSON = await response.json();

  console.log(data.articles);

  return data;
}
