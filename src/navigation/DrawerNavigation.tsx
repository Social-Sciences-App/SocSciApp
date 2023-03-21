import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Events from '../pages/Events';
import AdvisingPage from '../pages/AdvisingPage';
import OfficeHours from '../pages/OfficeHours';
// import BottomTabNavigator from './BottomTabNavigation';
import HomePage from '../pages/HomePage';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
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
