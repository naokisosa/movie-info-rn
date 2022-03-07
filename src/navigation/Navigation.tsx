import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default React.memo(Navigation);
