import {Button, Text, View} from 'react-native';

const HomePage = ({navigation}: any): JSX.Element => {
  return (
    <View>
      <Text>HomePage</Text>
      <Button
        title="Go to profile page"
        onPress={() => navigation.navigate('Profile')}
      />

      <Text>SDASd</Text>
      <Button
        title="Go to advising page"
        onPress={() => navigation.navigate('Advising')}
      />
      <Text>SDASd</Text>
      <Button
        title="Go to drawer page"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

export default HomePage;
