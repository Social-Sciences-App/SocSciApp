import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    width: Dimensions.get('window').width,
    aspectRatio: 393 / 177,
    height: undefined,
    resizeMode: 'cover',
  },
  flyer: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  headerTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F6EDA0',
    padding: 15,
    borderRadius: 15,
    fontSize: 7,
    margin: 40,
  },
});

const HomePage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text>Events</Text>
        <ScrollView horizontal={true} nestedScrollEnabled={true} />
        <Text>News</Text>
        <Text>Advising</Text>
        <Text>Calendar</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Click Here to Schedule an Appointment</Text>
        </TouchableOpacity>

        <Text style={styles.headerTextStyle}>
          RSVP to Upcoming SSARC Events
        </Text>
        <Image
          style={styles.flyer}
          source={require('../static/images/SSARC_Summer_2021_Webinars.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
