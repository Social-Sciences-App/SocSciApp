import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import MyDrawer from './DrawerNavigation';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home Tab"
      barStyle={{backgroundColor: '#F4EA8E'}}>
      <Tab.Screen
        name="Home Tab"
        component={MyDrawer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <EntypoIcon name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
