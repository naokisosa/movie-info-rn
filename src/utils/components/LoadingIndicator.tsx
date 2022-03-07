import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

export default React.memo(LoadingIndicator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
