import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#009387',
    backgroundColor: '#4DBAC2',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  logoView: {
    width: RFValue(160),
    height: RFValue(160),
    borderRadius: RFValue(80),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: RFValue(155),
    height: RFValue(155),
  },
  title: {
    fontSize: RFValue(25),
    color: '#4DBAC2',
    fontWeight: 'bold',
  },
  text: {
    fontSize: RFValue(14),
    marginTop: RFValue(5),
    color: '#aaa',
  },
  signin: {
    width: RFValue(150),
    height: RFValue(40),
    borderRadius: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonTouch: {
    flexDirection: 'row',
    marginTop: RFValue(50),
  },
  buttonTitle: {
    fontSize: RFValue(16),
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: RFValue(20),
    color: '#fff',
  },
});

export default styles;
