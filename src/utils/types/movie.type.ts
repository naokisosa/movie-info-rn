export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type Search = {
  Search?: Movie[];
  totalResults?: string;
  Response: 'True' | 'False';
  Error?: string;
};

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetail = Movie & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Awards: string;
  Ratings: Rating[];
};

export type SearchResponse = {
  data: Search;
};

export type MovieDetailResponse = {
  data: MovieDetail;
};
