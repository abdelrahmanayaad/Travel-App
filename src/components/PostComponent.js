import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS, PADDING} from '../constants/Constants';

function PostComponent(props) {
  const {
    profilePhoto,
    profileName,
    postDate,
    country,
    postCaption,
    postImage,
    likes,
    onPress,
  } = props;
  const [liked, setLiked] = useState(false);
  const likeOnPress = () => {
    setLiked(!liked);
  };
  const returnIcon = name => {
    return (
      <TouchableOpacity
        onPress={
          name == 'comment' ? onPress : name == 'heart' ? likeOnPress : null
        }>
        <AntDesign
          name={name == 'heart' ? (liked ? 'heart' : 'hearto') : name}
          size={25}
          color={name == 'heart' ? (liked ? COLORS.red : COLORS.blue) : null}
          style={styles.iconSpace}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={profilePhoto} style={styles.profileImage} />
          </TouchableOpacity>
          <View>
            <Text style={styles.name}>{profileName}</Text>
            <Text style={styles.date}>{postDate}</Text>
          </View>
        </View>
        <View style={styles.header2}>
          <Icon name="location" size={25} color="#1574C2" />
          <Text style={styles.country}>{country}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.caption}>{postCaption}</Text>
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
          <Image source={postImage} style={styles.postImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.postFooter}>
        <View style={styles.icons}>{returnIcon('heart')}</View>
        <Text style={styles.likes}>{liked ? likes + 1 : likes + ''} Likes</Text>
      </View>
    </View>
  );
}

export default PostComponent;

const styles = StyleSheet.create({
  container: {
    padding: PADDING.p11,
    height: 350,
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginBottom: PADDING.p8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: COLORS.black,
    marginBottom: PADDING.p11,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
  },
  iconSpace: {
    marginEnd: PADDING.p11,
  },
  likes: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
    color: '#1574C2',
  },
});
