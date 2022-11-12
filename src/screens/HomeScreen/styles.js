import {StyleSheet} from 'react-native';
import {COLORS, PADDING, FONTS} from '../../constants/Constants';

export default styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.backgroud,
    // paddingTop: PADDING.p10,
  },
  container: {
    backgroundColor: COLORS.backgroud,
    // marginTop: PADDING.p10,
    marginHorizontal: PADDING.p8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: PADDING.p11,
    marginBottom: PADDING.p5,
  },
  headerTitle: {
    fontSize: FONTS.h1,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: COLORS.blue,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconNoti: {
    marginEnd: PADDING.p7,
  },
});
