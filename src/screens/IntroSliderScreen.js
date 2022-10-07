import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../styles/IntroSliderStyle';

function IntroSliderScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View
          // animation="bounceIn"
          // animation="bounce"
          // animation="fadeInRight"
          animation="fadeInLeft"
          duration={2000}
          style={styles.logoView}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </Animatable.View>
      </View>
      <Animatable.View
        // duration={1500}
        animation="fadeInUpBig"
        style={styles.footer}>
        <Text style={styles.title}>Travel to anywhere !</Text>
        <Text style={styles.text}>Sign in with an account</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={styles.buttonTouch}>
            <LinearGradient
              colors={['#4DBAC2', '#3598A0']}
              style={styles.signin}>
              <Text style={styles.buttonTitle}>Get started</Text>
              <Icon name="chevron-right" style={styles.icon} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default IntroSliderScreen;
