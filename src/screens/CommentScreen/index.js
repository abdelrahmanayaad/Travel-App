import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CommentComponent from '../../components/CommentComponent';
import {COLORS} from '../../constants/Constants';
import {comments} from '../../utils/DummyData';
import styles from './styles';

function CommentScreen(props) {
  const {
    onPressArrow,
    profilePhoto,
    profileName,
    postDate,
    country,
    postCaption,
    postImage,
  } = props;
  const renderComment = ({item, index}) => {
    return (
      <CommentComponent
        profileImage={item.profileImag}
        name={item.profileName}
        date={item.date}
        likes={item.likes}
        comment={item.comment}
      />
    );
  };
  const returnComments = () => {
    return <FlatList data={comments} renderItem={renderComment} />;
  };
  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={onPressArrow} style={styles.arrowBackView}>
          <AntDesign name="left" size={20} color={COLORS.black} />
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.header1}>
            <Image style={styles.profileImage} source={profilePhoto} />
            <View>
              <Text style={styles.name}>{profileName}</Text>
              <Text style={styles.date}>{postDate}</Text>
            </View>
          </View>
          <View style={styles.header2}>
            <EvilIcons name="location" size={30} color={COLORS.blue} />
            <Text style={styles.country}>{country}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.caption}>{postCaption}</Text>
          <Image style={styles.postImage} source={postImage} />
        </View>
        <Text style={styles.comments}>Comments</Text>
        {returnComments()}
        <View style={styles.TextInputView}>
          <TextInput placeholder="Write Comment" style={styles.TextInput} />
        </View>
      </ScrollView>
    </View>
  );
}

export default CommentScreen;
