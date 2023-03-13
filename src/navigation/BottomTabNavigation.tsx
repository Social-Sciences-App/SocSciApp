import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomePage}
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
