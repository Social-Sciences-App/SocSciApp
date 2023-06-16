import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';

export interface EventCardProps {
  date: string;
  link: string;
  title: string;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    margin: 12,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 4,
    paddingLeft: 2,
  },
  date: {
    color: '#000000',
  },
  title: {
    color: '#29629F',
    fontWeight: 'bold',
  },
});

/*onTouchEnd={() => {
 Linking.canOpenURL(link)
 .then(() => Linking.openURL(link))
 .catch(() => {});
 }}*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventCard = ({date, title, link}: EventCardProps) => {
  return (
    <View style={styles.main}>
      <Card style={styles.container}>
        <Card.Title
          titleStyle={styles.date}
          title={date}
          subtitleStyle={styles.title}
          subtitle={title}
        />
      </Card>
    </View>
  );
};

export default EventCard;
