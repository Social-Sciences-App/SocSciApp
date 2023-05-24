import React from 'react';
import {
    Dimensions, FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Card} from 'react-native-paper';
//import {RootStackParams} from "../navigation/DrawerNavigation";

import {
    useNavigation,
    NavigationProp,
    ParamListBase,
} from '@react-navigation/native';

import {
    createDrawerNavigator,
    DrawerNavigationProp,

} from '@react-navigation/drawer';

export type RootStackParams = {
    Home: undefined;
    Home_Drawer: undefined;
    Search: undefined;
    Events: undefined;
    // Academics: undefined;
    About: undefined;
    // OfficeHours: undefined;
    Clubs: undefined;
    DAC: undefined;
    Notifications: undefined;
    MajorReqs: undefined;
    Contact: undefined;
    DirectoryPage: undefined;
    Anthropology: undefined;
    BusinessEconomics: undefined;
    ChicanoLatinoStudies: undefined;
    CognitiveSciences: undefined;
    Economics: undefined;
    InternationalStudies: undefined;
    LanguageScience: undefined;
    PoliticalScience: undefined;
    Psychology: undefined;
    QuantitativeEconomics: undefined;
    SocialPolicyPublicService: undefined;
    Sociology: undefined;

};

const Drawer = createDrawerNavigator<RootStackParams>();

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
    majorCard: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        //padding: 10,
        borderRadius: 15,
        fontSize: 7,
        margin: 15,
        //width: 170,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    majorCardImage: {
        width: 125,
        height: 125
    }
});

const MajorReqsPage = (): JSX.Element => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

    function GoToAnthropology() {
        navigation.navigate('Anthropology');
    }
    function GoToBusinessEconomics() {
        navigation.navigate('BusinessEconomics');
    }
    function GoToChicanoLatinoStudies() {
        navigation.navigate('ChicanoLatinoStudies');
    }
    function GoToCognitiveSciences() {
        navigation.navigate('CognitiveSciences');
    }
    function GoToEconomics() {
        navigation.navigate('Economics');
    }
    function GoToInternationalStudies() {
        navigation.navigate('InternationalStudies');
    }
    function GoToLanguageScience() {
        navigation.navigate('LanguageScience');
    }
    function GoToPoliticalScience() {
        navigation.navigate('PoliticalScience');
    }
    function GoToPsychology() {
        navigation.navigate('Psychology');
    }
    function GoToQuantitativeEconomics() {
        navigation.navigate('QuantitativeEconomics');
    }
    function GoToSocialPolicyPublicService() {
        navigation.navigate('SocialPolicyPublicService');
    }
    function GoToSociology() {
        navigation.navigate('Sociology');
    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>


        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Major/Minor Requirements</Text>

        <TouchableOpacity style={styles.majorCard} onPress={GoToAnthropology}>
            <Image
                style={styles.majorCardImage}
                source={require('../static/images/anthro_icon.png')}
            />
            <Text>Major in
                ANTHROPOLOGY (B.A.)
                {'\n'}
            </Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToBusinessEconomics}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/busecon_icon.png')}
              />
              <Text>Major in
                  BUSINESS ECONOMICS (B.A.)
                  {'\n'}
              </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.majorCard} onPress={GoToChicanoLatinoStudies}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/cls_icon.png')}
              />
              <Text>Major in
                  CHICANO/LATINO STUDIES (B.A.)
                  {'\n'}
              </Text>


          </TouchableOpacity>


          <TouchableOpacity style={styles.majorCard} onPress={GoToCognitiveSciences}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/cogsci_icon.png')}
              />
              <Text>Major in
                  COGNITIVE SCIENCES (B.S.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToEconomics}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/econ_icon.png')}
              />
              <Text>Major in
                  ECONOMICS (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToInternationalStudies}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/is_icon.png')}
              />
              <Text>Major in
                  LANGUAGE SCIENCE (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToLanguageScience}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/langsci_icon.png')}
              />
              <Text>Major in
                  INTERNATIONAL STUDIES (B.A.)
                  {'\n'}
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToPoliticalScience}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/polisci_icon.png')}
              />
              <Text>Major in
                  POLITICAL SCIENCE (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToPsychology}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/psych_icon.png')}
              />
              <Text>Major in
                  PSYCHOLOGY (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToQuantitativeEconomics}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/quantecon_icon.png')}
              />
              <Text>Major in
                  QUANTITATIVE ECONOMICS (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToSocialPolicyPublicService}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/spps_icon.png')}
              />
              <Text>Major in
                  SOCIAL POLICY & PUBLIC SERVICE (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={GoToSociology}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/sociology_icon.png')}
              />
              <Text>Major in
                  SOCIOLOGY (B.A.)
                  {'\n'}
              </Text>

          </TouchableOpacity>



      </ScrollView>
    </SafeAreaView>
  );
};

export default MajorReqsPage;
