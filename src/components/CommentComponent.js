import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FONTS, COLORS, PADDING} from '../constants/Constants';

function CommentComponent(props) {
  const [liked, setLiked] = useState(false);
  const {profileImage, name, date, comment, likes} = props;
  const onPressLikeComment = () => {
    setLiked(!liked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Image style={styles.image} source={profileImage} />
        <View style={styles.commentDetailsDataView}>
          <View style={styles.commentView}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.comment}>{comment}</Text>
          </View>
          <View style={styles.commentDetailsView}>
            <Text style={styles.commentDetails}>{date}</Text>
            <Text style={styles.commentDetails}>
              {liked ? likes + 1 : likes} likes
            </Text>
            <Text style={styles.commentDetails}>Replay</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPressLikeComment}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={25}
          color={liked ? COLORS.red : COLORS.blue}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: PADDING.p4,
  },
  header1: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginEnd: PADDING.p11,
  },
  commentDetailsDataView: {
    justifyContent: 'space-between',
  },
  commentView: {
    flexDirection: 'row',
  },
  name: {
    fontSize: FONTS.h6,
    color: COLORS.blue,
    marginEnd: PADDING.p11,
  },
  comment: {
    fontSize: FONTS.h6,
    // color: COLORS.black,
  },
  commentDetailsView: {
    flexDirection: 'row',
  },
  commentDetails: {
    fontSize: FONTS.h6,
    marginEnd: PADDING.p11,
  },
});
export default CommentComponent;
