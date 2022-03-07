import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StackParamList} from './types';
import Home from '../screens/Home/Home';
import Movie from '../screens/Movie/Movie';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
