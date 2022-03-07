import {
  MovieDetailResponse,
  SearchResponse,
} from '../../utils/types/movie.type';
import http from './http-common';

class MovieService {
  getMovieByTitle = (
    title: string,
    plot: 'full' | 'short',
  ): Promise<MovieDetailResponse> => {
    return http.get('', {
      params: {
        t: title,
        plot: plot,
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
