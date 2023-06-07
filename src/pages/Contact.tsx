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
  text1: {
    margin: 12
  },
});

const Contact = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/view.jpg')}
        />
        <Text style={styles.headerTextStyle}>Mailing Address</Text>
        <Text style={styles.text1}>
          3151 Social Science Plaza
          {"\n\n"}Irvine, CA 92697-5100

          {"\n\n"}Phone:
          {"\n\n"}949.824.2766

          {"\n\n"}Administrative offices for social sciences can be found in Social & Behavioral Sciences Gateway, 5th Floor.




        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
