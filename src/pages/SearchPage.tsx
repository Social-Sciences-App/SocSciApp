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
import MyDrawer from "../navigation/DrawerNavigation";
//import SearchBar from '../components/SearchBar';
import { SearchBar } from '@rneui/base'

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

const SearchPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Search</Text>


        <Text style={styles.headerTextStyle}>Add Search bar, then results after</Text>
        <SearchBar />


      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;
