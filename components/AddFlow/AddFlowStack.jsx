import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWH1 from './AddWH1';
import AddWH2 from './AddWH2';

const Stack = createNativeStackNavigator();
const AddFlowStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AddWH1" component={AddWH1} />
        <Stack.Screen name="AddWH2" component={AddWH2} />
      </Stack.Navigator>
  )
}

export default AddFlowStack