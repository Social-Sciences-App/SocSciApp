import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Events from '../pages/Events';
import AdvisingPage from '../pages/AdvisingPage';
import OfficeHours from '../pages/OfficeHours';
// import BottomTabNavigator from './BottomTabNavigation';
import HomePage from '../pages/HomePage';
import {Text} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F4EA8E',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#096DCA',
        },
        headerTitle: 'SSARC',
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="search" size={26} />
          </TouchableOpacity>
        ),
      }}>
      <Drawer.Screen
        name="Home Drawer"
        component={HomePage}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Advising"
        component={AdvisingPage}
        options={{drawerLabel: 'Advising'}}
      />
      <Drawer.Screen
        name="Events"
        component={Events}
        options={{drawerLabel: 'Events'}}
      />
      <Drawer.Screen
        name="Professor Office Hours"
        component={OfficeHours}
        options={{drawerLabel: 'Professor Office Hours'}}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
