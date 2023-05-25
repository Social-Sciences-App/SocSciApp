import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import events from '../assets/sample_events.json';
import news from '../assets/sample_news.json';
import EventCard, {EventCardProps} from '../components/EventCard/EventCard';
import {renderNode} from '@rneui/base';
import NewsCard from '../components/NewsCard/NewsCard';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
    backgroundColor: '#F8D447',
    padding: 15,
    borderRadius: 15,
    fontSize: 7,
    marginVertical: 8,
    marginHorizontal: 30,
  },
  blueText: {
    color: '#0063A4',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
});

const createEventList = ({item}) => {
  const {date, link, title} = item;
  return <EventCard date={date} link={link} title={title} />;
};

const NewsList = () => {
  return (
    <View>
      {news.flatMap(({id, date, link, title}) => (
        <NewsCard key={id} date={date} link={link} title={title} />
      ))}
    </View>
  );
};
const HomePage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.heading}>Events</Text>
        <FlatList
          horizontal={true}
          data={events}
          keyExtractor={item => item.id.toString()}
          renderItem={createEventList}
        />
        <Text style={styles.heading}>News</Text>
        <NewsList />
        <Text style={styles.heading}>Advising</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.blueText}>Academic Advising</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.blueText}>Peer Advisors</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
