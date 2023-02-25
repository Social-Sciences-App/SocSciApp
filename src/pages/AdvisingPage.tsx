import {Button, Text, View} from 'react-native';

const AdvisingPage = ({navigation}: any): JSX.Element => {
  return (
    <View>
      <Text>Advising</Text>
      <Button
        title="Go to home page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default AdvisingPage;
