import {
  MovieDetailResponse,
  SearchResponse,
} from '../../utils/types/movie.type';
import http from './http-common';

class MovieService {
  getMovieByTitle = (title: string): Promise<MovieDetailResponse> => {
    return http.get('', {
      params: {
        t: title,
        plot: 'full',
        type: 'movie',
      },
    });
  };

  findMovie = (title: string, year?: string): Promise<SearchResponse> => {
    return http.get('', {
      params: {
        s: title,
        y: year,
        type: 'movie',
      },
    });
  };
}
export default new MovieService();
