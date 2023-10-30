import { ResponseJSON } from '../types/types';

export async function getData(query: string) {
  const url = `
    https://api.themoviedb.org/3/search/movie?api_key=3a7591c31228beeab58e0dacf63a86a4&query=${query}&page=1
    `;

  const response: Response = await fetch(url);
  const data: ResponseJSON = await response.json();

  console.log(data);

  return data;
}
