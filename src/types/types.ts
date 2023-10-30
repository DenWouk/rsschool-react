export interface PropsConstructor {
  [key: string | number | symbol]: never;
}

export interface SearchFilmsResults {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface ResponseJSON {
  page: number;
  results: SearchFilmsResults[];
  total_pages: number;
  total_results: number;
}
