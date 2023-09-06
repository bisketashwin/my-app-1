// MainNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens here
import HomeScreen from './HomeScreen';
import AddUserScreen from './AddUserScreen';
// Import other screens as needed


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Add User' }} />
      {/* Add more screens with Stack.Screen as needed */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
