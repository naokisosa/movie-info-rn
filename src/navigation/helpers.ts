import {
  RouteProp,
  useNavigation as baseUseNavigation,
  useRoute as baseUseRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from './types';

export const useNavigation = () =>
  baseUseNavigation<NativeStackNavigationProp<StackParamList>>();

export const useRoute = <Screen extends keyof StackParamList>() =>
  baseUseRoute<RouteProp<StackParamList, Screen>>();
