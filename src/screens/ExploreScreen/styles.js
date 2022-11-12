import {StyleSheet} from 'react-native';
import {COLORS, FONTS, PADDING} from '../../constants/Constants';
export default styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.backgroud,
  },
  container: {
    backgroundColor: COLORS.backgroud,
    paddingStart: PADDING.p10,
    paddingVertical: PADDING.p10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: PADDING.p10,
  },
  title: {
    fontSize: FONTS.h1,
    fontWeight: 'bold',
    color: COLORS.blue,
    letterSpacing: 1,
  },
  iconsView: {
    flexDirection: 'row',
  },
  bookmarkIcon: {
    marginEnd: 30,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: PADDING.p10,
  },
  locationText: {
    fontSize: FONTS.h6,
    color: COLORS.blue,
    marginEnd: PADDING.p10,
  },
  TextInputView: {
    marginVertical: PADDING.p1,
    paddingEnd: PADDING.p10,
  },
  TextInput: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: PADDING.p12,
    backgroundColor: COLORS.lightGray,
  },
  horizontalScroll: {
    marginBottom: PADDING.p1,
  },
  listIcon: {
    marginEnd: PADDING.p8,
  },
  listText: {
    fontSize: FONTS.h5,
    marginEnd: PADDING.p8,
  },
  titlesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: PADDING.p10,
  },
  eventsTitle: {
    fontSize: FONTS.h3,
    color: COLORS.blue,
    fontWeight: 'bold',
    marginBottom: PADDING.p10,
  },
  allText: {
    fontSize: FONTS.h4,
    letterSpacing: 1,
    // fontWeight: 'bold',
  },
  eventsView: {
    marginBottom: PADDING.p1,
  },
});
