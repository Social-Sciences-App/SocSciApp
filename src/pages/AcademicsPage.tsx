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

const AcademicsPage = (): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Communication and Scheduling system with Academic Advisors and Peer Advisors</Text>

        <Text style={styles.headerTextStyle}>Show office hours of operation</Text>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Click Here to Schedule an Appointment</Text>
        </TouchableOpacity>

        <Text style={styles.headerTextStyle}>Text/Chat option is directly with Academic Advisors (Modeled after Handshake messaging system)</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AcademicsPage;
