import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  View,
  Button,
} from 'react-native';
import {Card} from 'react-native-paper';
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
        <Text style={styles.headerTextStyle}>
          Here is a directory of all Social Sciences staff and faculty, with
          their emails provided
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const dataArray = Object.values(people);
const renderItem = ({item}) => (
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
        <Text>{item.title}</Text>
        <Text>{item.email}</Text>
        <Text>Room/ Phone Number: {item.room}</Text>
      </Card.Content>
      <Card.Actions>
        {/* <Button>Cancel</Button>
        <Button>Ok</Button> */}
      </Card.Actions>
    </Card>
  </View>
);

const DirectoryPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataArray}
        ListHeaderComponent={Description}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default DirectoryPage;
