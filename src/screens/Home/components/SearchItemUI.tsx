import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieDetail} from '../../../utils/types/movie.type';
import FastImage from 'react-native-fast-image';
import LoadingIndicator from '../../../utils/components/LoadingIndicator';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  movie?: MovieDetail;
};

const SearchItemUI: React.FC<Props> = ({movie}) => {
  const PosterImage = () => (
    <FastImage
      style={styles.poster}
      source={{
        uri: movie?.Poster,
        priority: FastImage.priority.high,
      }}
    />
  );
  return (
    <>
      {movie ? (
        <SafeAreaView style={styles.container}>
          <PosterImage />
          <View style={styles.dataContainer}>
            <Text style={styles.title}>{movie.Title}</Text>
            {movie.Ratings.map((rating, index) => (
              <Text key={index}>
                - {rating.Source}: {rating.Value}
              </Text>
            ))}
            <Text style={styles.plot}>{movie.Plot}</Text>
          </View>
        </SafeAreaView>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default React.memo(SearchItemUI);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  poster: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  plot: {
    textAlign: 'justify',
  },
});
