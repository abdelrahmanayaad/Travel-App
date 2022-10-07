import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DBAC2',
  },
  header: {
    height: height * 0.25,
    paddingVertical: RFValue(30),
    paddingHorizontal: RFValue(15),
    justifyContent: 'flex-end',
  },
  footer: {
    height: height * 0.75,
    backgroundColor: '#fff',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    paddingVertical: RFValue(30),
    paddingHorizontal: RFValue(15),
  },
  register: {
    fontSize: RFValue(25),
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
  },
  viewTextInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: RFValue(30),
    alignItems: 'center',
  },
  icon: {
    fontSize: RFValue(20),
    color: '#000',
    marginEnd: RFValue(5),
  },
  textInputStyle: {
    flex: 1,
    padding: RFValue(2),
  },
  placeholder: {
    color: '#aaa',
  },
  signupButton: {
    width: '100%',
    height: RFValue(45),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#fff',
  },
  haveAccountView: {
    marginTop: RFValue(30),
    alignItems: 'center',
  },
  haveAccountText: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: '#4DBAC2',
  },
  login: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: '#317D84',
    textDecorationLine: 'underline',
  },
});

export default styles;
