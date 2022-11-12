import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PostComponent from '../../components/PostComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {posts} from '../../utils/DummyData';
import CommentScreen from '../CommentScreen';

function HomeScreen(props) {
  const [visibleComment, setVisibleComment] = useState(false);
  const [postModal, setPostModal] = useState({
    profileImag: '',
    profileName: '',
    date: '',
    country: '',
    caption: '',
    postImage: '',
  });
  const returnIcon = (name, style) => {
    return (
      <TouchableOpacity>
        <Ionicons name={name} size={30} style={style} />
      </TouchableOpacity>
    );
  };
  const onPress = item => {
    setPostModal({
      profileImag: item.profileImag,
      profileName: item.profileName,
      date: item.date,
      country: item.country,
      caption: item.caption,
      postImage: item.postImage,
    });
    setVisibleComment(true);
  };
  const onPressArrow = () => {
    setVisibleComment(false);
  };
  const renderItem = ({item, index}) => {
    return (
      <PostComponent
        profilePhoto={item.profileImag}
        profileName={item.profileName}
        postDate={item.date}
        country={item.country}
        postCaption={item.caption}
        postImage={item.postImage}
        likes={item.likes}
        onPress={() => onPress(item)}
      />
    );
  };
  const returnPosts = () => {
    return <FlatList data={posts} renderItem={renderItem} />;
  };
  return (
    <View style={styles.outerContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
          <View style={styles.headerIcons}>
            {returnIcon('notifications-outline', styles.iconNoti)}
            {returnIcon('chatbubble-ellipses-outline')}
          </View>
        </View>
        {returnPosts()}
      </ScrollView>
      <Modal
        visible={visibleComment}
        onRequestClose={() => {
          setVisibleComment(false);
        }}>
        <CommentScreen
          onPressArrow={onPressArrow}
          profilePhoto={postModal.profileImag}
          profileName={postModal.profileName}
          postDate={postModal.date}
          country={postModal.country}
          postCaption={postModal.caption}
          postImage={postModal.postImage}
        />
      </Modal>
    </View>
  );
}
export default HomeScreen;
