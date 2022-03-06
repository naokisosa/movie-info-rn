import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type StackParamList = {
  Home: undefined;
  Movie: {
    movieId: string;
  };
};

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
type MovieProps = NativeStackScreenProps<StackParamList, 'Movie'>;

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#222222',
  },
  headerTintColor: '#fff',
};

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View style={styles.homeContainer}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Movie"
        onPress={() =>
          navigation.navigate('Movie', {
            movieId: '5000',
          })
        }
      />
    </View>
  );
};

const MovieScreen = ({route, navigation}: MovieProps) => {
  const {movieId} = route.params;

  return (
    <View style={styles.movieContainer}>
      <Text>Movie Screen {movieId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
