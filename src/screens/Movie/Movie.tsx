import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useQuery} from 'react-query';
import {useRoute} from '../../navigation/helpers';
import MovieUI from './MovieUI';
import MovieService from '../../services/movie.service';
import {MovieDetail} from '../../utils/types/movie.type';

const Movie: React.FC = () => {
  const {
    params: {movieTitle},
  } = useRoute<'Movie'>();
  const [movie, setMovie] = useState<MovieDetail>();
  const {refetch: getMovieDetail} = useQuery(
    'query-movie-details',
    async () => MovieService.getMovieByTitle(movieTitle, 'full'),
    {
      enabled: false,
      onSuccess: res => {
        setMovie(res.data);
      },
    },
  );

  useFocusEffect(
    useCallback(() => {
      getMovieDetail();
    }, [getMovieDetail]),
  );
  return <MovieUI movie={movie} />;
};

export default Movie;
