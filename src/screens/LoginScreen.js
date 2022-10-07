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
import styles from '../styles/LoginStyle';

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

function LoginScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Animatable.Text animation="fadeInLeft" style={styles.register}>
            Register
          </Animatable.Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          {returnInput('Email', 'email-outline')}
          {returnInput('Phone', 'phone-in-talk')}
          {returnInput('Password', 'lock-outline', true)}
          {returnInput('Confirm Password', 'lock-outline', true)}
          <TouchableOpacity style={styles.signupButton}>
            <LinearGradient
              style={styles.signupButton}
              colors={['#4DBAC2', '#3598A0']}>
              <Text style={styles.signupText}>Sign up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.haveAccountView}>
            <Text style={styles.haveAccountText}>
              Already have an account ?{' '}
              <Text
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}
                style={styles.login}>
                Login
              </Text>
            </Text>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
