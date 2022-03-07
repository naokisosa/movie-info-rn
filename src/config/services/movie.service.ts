import http from './http-common';
import {SearchResponse, MovieDetail} from '../../utils/types/movie.type';

class MovieService {
  getMovieById = (id: string): Promise<SearchResponse> => {
    return http.get('', {
      params: {
        i: id,
        plot: 'full',
        type: 'movie',
      },
    });
  };

  findMovie = (title: string, year?: string): Promise<MovieDetail> => {
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
