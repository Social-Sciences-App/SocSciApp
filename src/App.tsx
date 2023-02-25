import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdvisingPage from './pages/AdvisingPage';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Advising" component={AdvisingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
