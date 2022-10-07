import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import IntroStack from './IntroStack';

function AppNavigation(props) {
  return (
    <NavigationContainer>
      <IntroStack />
    </NavigationContainer>
  );
}

export default AppNavigation;
