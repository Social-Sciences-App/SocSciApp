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
// import {Text} from 'react-native-paper';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
});

// TODO: Refactor into own file
const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>UCI</Text>
      <View>
        <Text style={styles.school}>School of</Text>
        <Text style={styles.school}>Social Sciences</Text>
      </View>
    </SafeAreaView>
  );
};
function MyDrawer() {
  // TODO: headerTitleAlign does nothing on IOS, someone will need to fix
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
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
        name="Major & Minor Requirements"
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
    </Drawer.Navigator>
  );
}
export default MyDrawer;
