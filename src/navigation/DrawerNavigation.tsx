import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Events from '../pages/Events';
// import AcademicsPage from '../pages/AcademicsPage';
// import OfficeHours from '../pages/OfficeHours';
// import BottomTabNavigator from './BottomTabNavigation';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import AboutPage from '../pages/AboutPage';
import ClubsPage from '../pages/ClubsPage';
import DACPage from '../pages/DACPage';
import Notifications from '../pages/Notifications';
import MajorReqsPage from '../pages/MajorReqsPage';
import DirectoryPage from '../pages/DirectoryPage';
import Contact from '../pages/Contact';
import Anthropology from '../pages/major_pages/Anthropology';
import BusinessEconomics from '../pages/major_pages/BusinessEconomics';
import ChicanoLatinoStudies from '../pages/major_pages/ChicanoLatinoStudies';
import CognitiveSciences from '../pages/major_pages/CognitiveSciences';
import Economics from '../pages/major_pages/Economics';
import InternationalStudies from '../pages/major_pages/InternationalStudies';
import LanguageScience from '../pages/major_pages/LanguageScience';
import PoliticalScience from '../pages/major_pages/PoliticalScience';
import Psychology from '../pages/major_pages/Psychology';
import QuantitativeEconomics from '../pages/major_pages/QuantitativeEconomics';
import SocialPolicyPublicService from '../pages/major_pages/SocialPolicyPublicService';
import Sociology from '../pages/major_pages/Sociology';
// import {Text} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

import {DrawerNavigationProp} from '@react-navigation/drawer';

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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'arial',
    gap: 4,
  },

  title: {
    color: '#FFFFFF',
    fontWeight: '700',
    lineHeight: 46,
    fontSize: 40,
  },
  school: {
    color: '#FFFFFF',
    lineHeight: 18,
    fontSize: 16,
    fontStyle: 'normal',
  },
  search: {
    color: '#FFFFFF',
    marginRight: 20,
  },
});

// TODO: Refactor into own file
const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  function GoToHome() {
    navigation.navigate('Home_Drawer');
  }
  return (
    <TouchableOpacity style={styles.container} onPress={GoToHome}>
      <Text style={styles.title}>UCI</Text>
      <View>
        <Text style={styles.school}>School of</Text>
        <Text style={styles.school}>Social Sciences</Text>
      </View>
    </TouchableOpacity>
  );
};

function MyDrawer() {
  // TODO: headerTitleAlign does nothing on IOS, someone will need to fix
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: '#D9D9D9',
        drawerInactiveBackgroundColor: '#FFFFFF',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#0063A4',
        },
        headerTitle: Header,
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          alignContent: 'center',
          marginLeft: 25,
        },
      }}>
      <Drawer.Screen
        name="Home_Drawer"
        component={HomePage}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => (
            <EntypoIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Advising"
        component={AcademicsPage}
        options={{drawerLabel: 'Academics',
            drawerIcon: ({color}) => (
                <Foundation name="clipboard-pencil" color={color} size={26} />
            )
        }}
      /> */}
      <Drawer.Screen
        name="Events"
        component={Events}
        options={{
          drawerLabel: 'Events',
          drawerIcon: ({color}) => (
            <EntypoIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchPage}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Search',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutPage}
        options={{
          drawerLabel: 'About Us',
          drawerIcon: ({color}) => (
            <Ionicons name="people-sharp" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="Clubs"
        component={ClubsPage}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Clubs',
          drawerIcon: ({color}) => (
            <MaterialIcons name="meeting-room" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerLabel: 'Notifications',
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="DirectoryPage"
        component={DirectoryPage}
        options={{
          drawerLabel: 'Directory',
          drawerIcon: ({color}) => (
            <AntDesign name="folder1" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="DAC"
        component={DACPage}
        options={{
          drawerLabel: 'DAC',
          drawerIcon: ({color}) => (
            <MaterialIcons name="meeting-room" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="MajorReqs"
        component={MajorReqsPage}
        options={{
          drawerLabel: 'Major/Minor Reqs',
          drawerIcon: ({color}) => (
            <Ionicons name="school-sharp" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({color}) => (
            <AntDesign name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Anthropology"
        component={Anthropology}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Anthropology',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />

      <Drawer.Screen
        name="BusinessEconomics"
        component={BusinessEconomics}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'BusinessEconomics',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChicanoLatinoStudies"
        component={ChicanoLatinoStudies}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'ChicanoLatinoStudies',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="CognitiveSciences"
        component={CognitiveSciences}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'CognitiveSciences',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Economics"
        component={Economics}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Economics',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="InternationalStudies"
        component={InternationalStudies}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'InternationalStudies',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="LanguageScience"
        component={LanguageScience}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'LanguageScience',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="PoliticalScience"
        component={PoliticalScience}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'PoliticalScience',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Psychology"
        component={Psychology}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Psychology',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="QuantitativeEconomics"
        component={QuantitativeEconomics}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'QuantitativeEconomics',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SocialPolicyPublicService"
        component={SocialPolicyPublicService}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'SocialPolicyPublicService',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sociology"
        component={Sociology}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Sociology',
          drawerIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
