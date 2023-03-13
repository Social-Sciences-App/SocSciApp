import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomePage from './pages/HomePage';
// import ProfilePage from './pages/ProfilePage';
// import AdvisingPage from './pages/AdvisingPage';
import MyDrawer from './navigation/DrawerNavigation';

// const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
