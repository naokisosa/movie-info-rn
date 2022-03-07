import React, {useEffect, useState} from 'react';
import SearchItemUI from './SearchItemUI';
import MovieService from '../../../services/movie.service';
import {useQuery} from 'react-query';
import {MovieDetail} from '../../../utils/types/movie.type';

type Props = {
  movieTitle: string;
};

const SearchItem: React.FC<Props> = ({movieTitle}) => {
  const [movie, setMovie] = useState<MovieDetail>();
  const {refetch: getMovieShortDetails} = useQuery(
    `query-${movieTitle}`,
    async () => MovieService.getMovieByTitle(movieTitle, 'short'),
    {
      enabled: false,
      onSuccess: res => {
        setMovie(res.data);
      },
    },
  );

  useEffect(() => {
    getMovieShortDetails();
  }, [getMovieShortDetails]);

  return <SearchItemUI movie={movie} />;
};

export default SearchItem;
