export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type SearchResponse = {
  Search: Movie[];
  totalResults: string;
  Response: string;
};

export type MovieDetail = Movie & {
  Rated: string;
  Released: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Awards: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
};
