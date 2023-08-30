import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogIn from './components/LogIn';
import TabsLayout from './components/Tabs/TabsLayout';
import MyModal from './components/MyModal';
import AddWH1 from './components/AddFlow/AddWH1';
import AddWH2 from './components/AddFlow/AddWH2';
import Tab1 from './components/Tabs/Tab1';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const handleLogOut = () => {
  const navigation = useNavigation();
  console.log(navigation)
  // It is important to add id="LeftDrawer" and id="mainStack" for the get parent to work error free
  const drawerNavigation = navigation.getParent('LeftDrawer').getParent('mainStack');
  drawerNavigation?.goBack();
  return (
    <><Text>is this showing up</Text></>
  )

}
const handleAdd = () => {
  const navigation = useNavigation();
  // It is important to add id="LeftDrawer" and id="mainStack" for the get parent to work error free
  //const drawerNavigation = navigation.getParent('LeftDrawer').getParent('mainStack');
  //const drawerNavigation = navigation.getParent('mainStack');
  //navigation.goBack();
  navigation.getParent('mainStack')?.navigate(AddWH1);
  return (
    <><Text>This should not show up -- This is drawer!</Text>
      <Text>It should go to tabs</Text>
      <Text>It is poosible when i can change stack navigation history</Text></>
  )

}

const HandleAddBack = () => {
  const navigation = useNavigation();
  // const jumpToAction = DrawerActions.jumpTo('Tab1');
  // navigation.dispatch(jumpToAction);

  return (
    <Button
      //onPress={() => navigation.navigate(Tab1)}
      //onPress={() => navigation.navigate('LogIn')}
      //onPress={() => navigation.navigate('TabsLayout')}
      onPress={() => navigation.pop(1)

      }
      title="back"
      color="#d33809"
    />
  )

}

function MyDrawer() {
  return (
    <Drawer.Navigator id='LeftDrawer'
      options={{
        headerShown: false,
        // backBehaviour:history ,
      }}
    >
      {/* Bellow line of code would hide the redundant tabs menu item and also hode the tabs title bar which are shown by line wihtout this comment */}
      {/* <Drawer.Screen name="TabsLayout" component={TabsLayout} options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} /> */}
      <Drawer.Screen name="My Tabs" component={TabsLayout} 
      options={{
        title:'Tabs parent header (will hide this)',
        headerLeft: (props) => (<></>)
          
        }}/>
      <Drawer.Screen name="Log Out" component={handleLogOut} />
      <Drawer.Screen name="Add Items" component={handleAdd} options={{ headerStyle: { backgroundColor: '#85faee', } }} />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id='mainStack'
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Group  >
          <Stack.Screen name="LogIn" component={LogIn}
            options={{ headerStyle: { backgroundColor: '#f9997c', } }}
          />
          <Stack.Screen name="TabsDraw" component={MyDrawer} options={{title:'Drawer header (will hide this)', headerShown: true ,headerStyle: { backgroundColor: '#f9997c', }}}
            />
        </Stack.Group>
        <Stack.Group>

        </Stack.Group>
        <Stack.Group options={{ headerShown: false }}>
          <Stack.Screen name="AddWH1" component={AddWH1}
            options={{
              headerStyle: { backgroundColor: '#f9997c' },
              headerLeft: HandleAddBack,
            }} />
          <Stack.Screen name="AddWH2" component={AddWH2}
            options={{ headerStyle: { backgroundColor: '#f9997c', } }} />
        </Stack.Group>
        <Stack.Group options={{ presentation: 'card' }}>
          <Stack.Screen name="MyModal" component={MyModal}
            options={{ headerStyle: { backgroundColor: '#f9997c', } }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;