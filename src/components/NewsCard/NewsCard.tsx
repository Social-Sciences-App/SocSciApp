import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

export interface NewsCardProps {
  date: string;
  link: string;
  title: string;
}

const styles = StyleSheet.create({
  main: {},
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
  },
  date: {
    fontSize: 14,
    color: '#000000',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    backgroundColor: '#29629F',
  },
  left: {
    margin: 0,
  },
});

const CalendarIcon = props => (
  <View>
    <Image
      style={styles.icon}
      source={require('../../static/images/calendar_icon.png')}
    />
  </View>
);
/*onTouchEnd={() => {
 Linking.canOpenURL(link)
 .then(() => Linking.openURL(link))
 .catch(() => {});
 }}*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewsCard = ({date, title, link}: NewsCardProps) => {
  return (
    <View style={styles.main}>
      <Card style={styles.container}>
        <Card.Title
          titleStyle={styles.date}
          title={date}
          subtitleStyle={styles.title}
          subtitle={title}
          left={CalendarIcon}
          leftStyle={styles.left}
        />
      </Card>
    </View>
  );
};

export default NewsCard;
