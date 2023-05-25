import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {FlatList} from 'react-native-gesture-handler';

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

  //notification list stuff

  notifBoxView: {
    flexDirection: 'row',

    width: 350,

    gap: 5,
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },

  notifText: {
    textAlign: 'left',
    padding: 5,
    flex: 2,
  },

  dateText: {
    textAlign: 'right',
    fontSize: 15,
    color: 'lightgray',
    flex: 1,
  },

  notifSeparator: {
    padding: 5,
  },
});

const NOTIFS = [
  {
    data: 'SSARC App out soon!',
  },
  {
    data: 'Alert: Notification!',
  },
  {
    data: 'Even more notifications...',
  },
];

type ItemProps = {data: string};

const NotifItem = ({data}: ItemProps) => (
  <View style={styles.notifBoxView}>
    <EntypoIcon name="home" color={'black'} size={16} />
    <Text style={styles.notifText}>{data}</Text>
    <Text style={styles.dateText}>2d</Text>
  </View>
);

const NoNotifs = () => (
  <Text style={styles.headerTextStyle}>
    Nofications regarding upcoming UCI SS school events will appear here.
  </Text>
);

const NotifSeparator = () => <View style={styles.notifSeparator} />;

const Notifications = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Notifications</Text>
      </View>

      <FlatList
        data={NOTIFS}
        ListEmptyComponent={NoNotifs}
        renderItem={({item}) => <NotifItem data={item.data} />}
        ItemSeparatorComponent={NotifSeparator}
      />
    </SafeAreaView>
  );
};

export default Notifications;
