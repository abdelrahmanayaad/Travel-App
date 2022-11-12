import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CartComponent from '../../components/CartComponent';
import {COLORS} from '../../constants/Constants';
import styles from './styles';

function ExploreScreen(props) {
  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <View style={styles.iconsView}>
            <Fontisto
              name="bookmark"
              size={30}
              color={COLORS.blue}
              style={styles.bookmarkIcon}
            />
            <Fontisto name="map-marker-alt" size={30} color={COLORS.blue} />
          </View>
        </View>
        <View style={styles.locationView}>
          <Text style={styles.locationText}>Chennai , Tamilnadu</Text>
          <Fontisto name="angle-down" size={15} color={COLORS.blue} />
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Search for events , places"
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.horizontalScroll}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Fontisto name="left-align" size={20} style={styles.listIcon} />
          <Text style={[styles.listText, {color: COLORS.blue}]}>All</Text>
          <Text style={styles.listText}>Events</Text>
          <Text style={styles.listText}>Place of interest</Text>
          <Text style={styles.listText}>Resturants</Text>
          <Text style={styles.listText}>Hotels</Text>
        </ScrollView>
        <View style={styles.titlesView}>
          <Text style={styles.eventsTitle}>Events</Text>
          <Text style={styles.allText}>All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventsView}>
          <CartComponent
            name="Abdelrahman"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="21 May"
          />
          <CartComponent
            name="Youssef"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="1 May"
          />
          <CartComponent
            name="Moaz"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="1 May"
          />
        </ScrollView>
        <View style={styles.titlesView}>
          <Text style={styles.eventsTitle}>Place of interest</Text>
          <Text style={styles.allText}>All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventsView}>
          <CartComponent
            name="Moaz"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="1 May"
          />
          <CartComponent
            name="Moaz"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="1 May"
          />
          <CartComponent
            name="Moaz"
            title="Madras standup comedy"
            details="standup , Abdelrahman Moahemd Ayad"
            date="1 May"
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default ExploreScreen;
