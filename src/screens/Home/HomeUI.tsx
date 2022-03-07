import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

type Props = {
  onPress: () => void;
};

const HomeUI: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Movie" onPress={onPress} />
    </View>
  );
};

export default React.memo(HomeUI);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
