import React, {useCallback, useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {useNavigation} from '../../navigation/helpers';
import HomeUI from './HomeUI';
import MovieService from '../../config/services/movie.service';
import {Movie} from '../../utils/types/movie.type';
import {debounce} from 'throttle-debounce';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [results, setResults] = useState<Movie[]>();
  const [error, setError] = useState<string | undefined>();
  const {refetch: searchMovies} = useQuery(
    'query-movie-search',
    async () => MovieService.findMovie(title, year),
    {
      enabled: false,
      onSuccess: res => {
        console.log(res);
        if (res.data.Response === 'True') {
          setResults(res.data.Search);
        } else {
          setError(res.data.Error);
        }
      },
      onError: err => console.log(err),
    },
  );

  const debounceSearchMovies = debounce(
    1000,
    useCallback(() => {
      searchMovies();
    }, [searchMovies]),
  );

  useEffect(() => {
    title.length > 0 && debounceSearchMovies();

    return () => {
      debounceSearchMovies.cancel();
    };
  }, [debounceSearchMovies, title.length]);

  const handleChangeTitle = useCallback((value: string) => {
    setError(undefined);
    setTitle(value);
  }, []);

  const handleChangeYear = useCallback((value: string) => {
    setError(undefined);
    setYear(value);
  }, []);

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
