import {StyleSheet} from 'react-native';
import {COLORS, PADDING, FONTS} from '../../constants/Constants';

export default styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.backgroud,
  },
  container: {
    backgroundColor: COLORS.backgroud,
    marginHorizontal: PADDING.p8,
  },
  arrowBackView: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: PADDING.p11,
    marginBottom: PADDING.p5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: PADDING.p5,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.backgroud,
    marginEnd: PADDING.p11,
  },
  name: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  date: {
    fontSize: FONTS.h7,
    color: COLORS.blue,
  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  country: {
    fontSize: FONTS.h6,
    color: COLORS.blue,
  },
  caption: {
    fontSize: FONTS.h6,
    color: COLORS.blue,
    marginBottom: PADDING.p11,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
  },
  comments: {
    fontSize: FONTS.h5,
    color: COLORS.blue,
    marginVertical: PADDING.p8,
  },
  TextInputView: {
    marginBottom: PADDING.p8,
  },
  TextInput: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: PADDING.p12,
    backgroundColor: COLORS.lightGray,
  },
});
