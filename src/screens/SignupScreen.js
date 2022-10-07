import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/SignupStyle';

function returnInput(placeholder, icon, password) {
  return (
    <View>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <View style={styles.viewTextInput}>
        <Icon name={icon} style={styles.icon} />
        <TextInput
          secureTextEntry={password ? true : false}
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
}

function SignupScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Animatable.Text animation="fadeInLeft" style={styles.register}>
            Login
          </Animatable.Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          {returnInput('Email', 'email-outline')}
          {returnInput('Password', 'lock-outline', true)}
          <TouchableOpacity style={styles.signupButton}>
            <LinearGradient
              style={styles.signupButton}
              colors={['#4DBAC2', '#3598A0']}>
              <Text style={styles.signupText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
