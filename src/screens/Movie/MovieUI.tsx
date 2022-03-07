import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LoadingIndicator from '../../utils/components/LoadingIndicator';
import {MovieDetail} from '../../utils/types/movie.type';

type Props = {
  movie?: MovieDetail;
};

const MovieUI: React.FC<Props> = ({movie}) => {
  const PosterImage = () => (
    <FastImage
      style={styles.poster}
      source={{
        uri: movie?.Poster,
        priority: FastImage.priority.normal,
      }}
    />
  );

  return (
    <>
      {movie ? (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.secondaryInfo}>
              {movie.Released} {movie.Rated} {movie.Runtime}
            </Text>
            <PosterImage />
            <Text style={styles.plot}>{movie.Plot}</Text>
            <Text>
              <Text style={styles.bold}>Director: </Text>
              {movie.Director}
            </Text>
            <Text>
              <Text style={styles.bold}>Actors: </Text>
              {movie.Actors}
            </Text>
            <Text>
              <Text style={styles.bold}>Awards: </Text>
              {movie.Awards}
            </Text>
            <Text style={styles.bold}>Ratings:</Text>

            {movie.Ratings.map((rating, index) => (
              <Text key={index}>
                - {rating.Source}: {rating.Value}
              </Text>
            ))}
          </ScrollView>
        </SafeAreaView>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default React.memo(MovieUI);

const styles = StyleSheet.create({
  container: {margin: 20},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  secondaryInfo: {
    marginBottom: 2,
  },
  poster: {
    width: 300,
    height: 300,
    marginBottom: 2,
  },
  plot: {
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
});
