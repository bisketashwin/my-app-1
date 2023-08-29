import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogIn from './components/LogIn';
import TabsLayout from './components/Tabs/TabsLayout';
import AddFlowStack from './components/AddFlow/AddFlowStack';
import MyModal from './components/MyModal';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator options={{headerShown:false}}>
      {/* Bellow line of code would hide the redundant tabs menu item and also hode the tabs title bar which are shown by line wihtout this comment */}
      {/*<Drawer.Screen name="Feed" component={TabsLayout}  options={{drawerItemStyle: { display: 'none' },headerShown:false }}/> */}
      <Drawer.Screen name="Feed" component={TabsLayout} />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="TabsLayout" component={MyDrawer} options={{headerShown:false}}/>
        <Stack.Screen name="AddFlowStack" component={AddFlowStack} options={{headerShown:false}} />
        <Stack.Screen name="MyModal" component={MyModal} options={{presentation:'card'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;