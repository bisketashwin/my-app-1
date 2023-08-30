import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogIn from './components/LogIn';
import TabsLayout from './components/Tabs/TabsLayout';
import AddFlowStack from './components/AddFlow/AddFlowStack';
import MyModal from './components/MyModal';
import AddWH1 from './components/AddFlow/AddWH1';
import AddWH2 from './components/AddFlow/AddWH2';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const handleLogOut = ()=>{
  const navigation = useNavigation();
  console.log(navigation)
  // It is important to add id="LeftDrawer" and id="mainStack" for the get parent to work error free
  const drawerNavigation = navigation.getParent('LeftDrawer').getParent('mainStack');
  drawerNavigation?.goBack();
  return(
    <></>
  )

}

function MyDrawer() {
  return (
    <Drawer.Navigator id='LeftDrawer' options={{headerShown:false}}>
      {/* Bellow line of code would hide the redundant tabs menu item and also hode the tabs title bar which are shown by line wihtout this comment */}
      <Drawer.Screen name="Feed" component={TabsLayout}  options={{drawerItemStyle: { display: 'none' },headerShown:false }}/>
      {/* <Drawer.Screen name="Feed" component={TabsLayout} /> */}
      <Drawer.Screen name="Log Out" component={handleLogOut} />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id='mainStack'>
        <Stack.Group>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="TabsLayout" component={MyDrawer} options={{headerShown:false}}/>
        </Stack.Group>
        <Stack.Group>

        </Stack.Group>
        <Stack.Group options={{headerShown:false}}>
        <Stack.Screen name="AddWH1" component={AddWH1} />
        <Stack.Screen name="AddWH2" component={AddWH2} />
        </Stack.Group>
        <Stack.Group options={{presentation:'card'}}>
        <Stack.Screen name="MyModal" component={MyModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;