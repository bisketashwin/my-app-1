import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn';
import TabsLayout from './components/Tabs/TabsLayout';
import AddFlowStack from './components/AddFlow/AddFlowStack';
import MyModal from './components/MyModal';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="TabsLayout" component={TabsLayout} options={{headerShown:false}}/>
        <Stack.Screen name="AddFlowStack" component={AddFlowStack} options={{headerShown:false}} />
        <Stack.Screen name="MyModal" component={MyModal} options={{presentation:'card'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;