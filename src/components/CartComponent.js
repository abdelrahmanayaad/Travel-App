import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, FONTS, PADDING} from '../constants/Constants';

function CartComponent(props) {
  const {name, title, details, date} = props;
  return (
    <ImageBackground
      imageStyle={styles.container}
      source={require('../assets/images/post2.jpg')}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Fontisto name="bookmark" size={30} color={COLORS.white} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>{details}</Text>
          <View style={styles.footer}>
            <Text style={styles.view}>Channel</Text>
            <Text style={styles.view}>{date}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default CartComponent;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    marginEnd: PADDING.p12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: FONTS.h6,
    color: COLORS.white,
  },
  title: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  details: {
    fontSize: FONTS.h7,
    color: COLORS.white,
    marginBottom: PADDING.p10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    fontSize: FONTS.h7,
    color: COLORS.white,
  },
});
