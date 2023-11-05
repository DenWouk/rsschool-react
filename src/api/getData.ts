import { ResponseData } from '../types/types';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '1f4be37456c047d0bfe7091ceaa25eab';

export async function getData(query: string, page: number, pageSize: number) {
  const response: Response = await fetch(
    `${API_URL}?q=${query}&sortBy=relevancy&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
  );

  const data: ResponseData = await response.json();

  console.log(data);

  return data;
}
