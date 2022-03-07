import React, {useCallback} from 'react';
import {useNavigation} from '../../navigation/helpers';
import HomeUI from './HomeUI';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Movie', {
      movieId: '1000',
    });
  }, [navigation]);

  return <HomeUI onPress={handleOnPress} />;
};

export default Home;
