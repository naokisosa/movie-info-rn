import React, {useCallback, useState} from 'react';
import {useQuery} from 'react-query';
import {useNavigation} from '../../navigation/helpers';
import HomeUI from './HomeUI';
import MovieService from '../../services/movie.service';
import {Movie} from '../../utils/types/movie.type';
import {debounce} from 'lodash';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [results, setResults] = useState<Movie[] | undefined>();
  const [error, setError] = useState<string | undefined>();
  const {refetch: searchMovies} = useQuery(
    'query-movie-search',
    async () => MovieService.findMovie(title, year),
    {
      enabled: false,
      onSuccess: res => {
        if (res.data.Response === 'True') {
          setResults(res.data.Search);
        } else {
          setError(res.data.Error);
          setResults(undefined);
        }
      },
    },
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearchMovies = useCallback(
    debounce(value => {
      if (value.length > 0) {
        searchMovies();
      } else {
        setResults(undefined);
      }
    }, 1000),
    [],
  );

  const handleChangeTitle = useCallback(
    (value: string) => {
      setTitle(value);
      setError(undefined);
      debounceSearchMovies(value);
    },
    [debounceSearchMovies],
  );

  const handleChangeYear = useCallback(
    (value: string) => {
      setYear(value);
      setError(undefined);
      debounceSearchMovies(value);
    },
    [debounceSearchMovies],
  );

  const handleOnPressItem = useCallback(
    (movieTitle: string) => {
      navigation.navigate('Movie', {
        movieTitle,
      });
    },
    [navigation],
  );

  return (
    <HomeUI
      title={title}
      year={year}
      onChangeTitle={handleChangeTitle}
      onChangeYear={handleChangeYear}
      results={results}
      error={error}
      onPressItem={handleOnPressItem}
    />
  );
};

export default Home;
