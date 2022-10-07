import React from 'react';
import {View, Text} from 'react-native';
import IntroSliderScreen from './src/screens/IntroSliderScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import AppNavigation from './src/navigation';

function App(props) {
  return (
    <>
      <AppNavigation />
    </>
  );
}

export default App;
