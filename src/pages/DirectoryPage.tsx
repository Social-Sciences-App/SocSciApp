import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Card} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
// import { PureComponent } from 'react';
// import { RecyclerListView } from "recyclerlistview/web"
import {SearchBar} from '@rneui/themed';
import {useState} from 'react';

const people = require('../assets/directory.json');

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
  card: {
    padding: 20,
  },
});



const Description = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Directory</Text>
        {/* <SearchBar /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderItem = ({item}) => {
  const {title, email} = item;
  const cleanedEmailSubstring =
    email.indexOf('mailto:') === 0 ? 'mailto:'.length : 0;
  const cleanedEmail = email.substring(cleanedEmailSubstring);
  return (
    // <View>
    //   <Text>Name: {item.name}</Text>
    //   {/* <Button
    //     onPress={() => Linking.openURL(`mailto:${item.email}`)}
    //     title= {item.email}
    //   /> */}
    //   <Text>Email / Link: {item.email}</Text>
    //   <Text>Title: {item.title}</Text>
    //   <Text>Department: {item.department}</Text>
    //   <Text>Room: {item.room}</Text>
    // </View>
    <View style={styles.card}>
      <Card>
        <Card.Title
          title={item.name}
          subtitle={item.department}
          // left={LeftContent}
        />
        <Card.Content>
          <Text>{title}</Text>
          <Text>{cleanedEmail}</Text>
          {/*<Text>Room/ Phone Number: {item.room}</Text>*/}
        </Card.Content>
        <Card.Actions>
          {/* <Button>Cancel</Button>
        <Button>Ok</Button> */}
        </Card.Actions>
      </Card>
    </View>
  );
};

// debug due to large list
// const MAX_DIRECTORY_ENTRIES = 10;
// const dataArray = Object.values(people).slice(0, MAX_DIRECTORY_ENTRIES);

// full list
const dataArray = Object.values(people);
const flashListEstimatedItemSize = 164;

const DirectoryPage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
    // // filtering out the full list of people
    // based on the search string
    const filteredPeople = Object.values(people).filter((person) => {
      const {name, department, title} = person;
      const lowerCaseSearch = search.toLowerCase();
      return (
        name.toLowerCase().includes(lowerCaseSearch) ||
        department.toLowerCase().includes(lowerCaseSearch) ||
        title.toLowerCase().includes(lowerCaseSearch)
      );
    });
    setSearchResults(filteredPeople);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
        <FlashList
          data={searchResults || dataArray}
          ListHeaderComponent={Description}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          estimatedItemSize={flashListEstimatedItemSize}
        />
      </View>
    </SafeAreaView>
  );
};

export default DirectoryPage;
