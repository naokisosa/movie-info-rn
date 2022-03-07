import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

type Props = {
  movieId: string;
  onPressBack: () => void;
};

const MovieUI: React.FC<Props> = ({movieId, onPressBack}) => {
  return (
    <View style={styles.container}>
      <Text>Movie Screen {movieId}</Text>
      <Button title="Go back" onPress={onPressBack} />
    </View>
  );
};

export default React.memo(MovieUI);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
