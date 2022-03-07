import React, {useCallback} from 'react';
import {useNavigation, useRoute} from '../../navigation/helpers';
import MovieUI from './MovieUI';

const Movie: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: {movieId},
  } = useRoute<'Movie'>();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <MovieUI movieId={movieId} onPressBack={handlePressBack} />;
};

export default Movie;
