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
  mainHeaderTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
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
  text1: {
    margin: 20
  },
});

const DACPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.mainHeaderTextStyle}>
          About DAC (Dean's Ambassadors Council)
        </Text>
        <Text style={styles.text1}>
          Representing the UCI School of Social Sciences undergraduate students,
          we strive to promote meaningful interactions between students,
          faculty, and staff. We aim to give back to the Social Sciences
          community by building an inclusive environment for students. Our
          efforts focus on bringing the School together through various programs
          including community service projects and academic engagement
          opportunities. In addition, the Council operates as the first in-line
          for assisting in schoolwide events and functions. Interested in
          representing our school? The Dean’s Ambassadors Council will be
          accepting applications for the 2023-2024 academic year in spring 2023.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DACPage;
