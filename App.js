import 'react-native-gesture-handler'; HandleScreen4
import React, {useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {containers,buttons,Texts} from './components/Styles'

import Screen1 from './components/TestDraw/Screen1';
import Screen2 from './components/TestDraw/Screen2';HandleLogOut
import Screen3 from './components/TestDraw/Screen3';
import Screen4 from './components/TestDraw/Screen4';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HandleLogOut(params) {
    const navigation = useNavigation();
    console.log(navigation)
    // It is important to add id="mainStack1" for the get parent to work error free
    const drawerNavigation = navigation.getParent('Drawer1').getParent('MainStack1');
    drawerNavigation?.goBack();
}
// const HandleLogOut = () => {
//     const navigation = useNavigation();
//     console.log(navigation)
//     // It is important to add id="mainStack1" for the get parent to work error free
//     const drawerNavigation = navigation.getParent('Drawer1').getParent('MainStack1');
//   drawerNavigation?.goBack();
//     return (
//       <><Text>is this showing up?</Text></>
//     )

//   }

// function HandleScreen4(params) {
//     const navigation = useNavigation();
//     const drawerNavigation = navigation.getParent('Drawer1').getParent('MainStack1');
//     drawerNavigation?.navigate('Screen4');
//     //drawerNavigation?.goBack();
// }

const HandleScreen4 = () => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('Drawer1').getParent('MainStack1');
 

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      setCount(1);
      drawerNavigation?.navigate(Screen4);
    }
  }, [count]);
    return (
        <><Text style={Texts.M1}>Count: {count}</Text>
        <Text>This should not show up -- This is drawer!</Text>
            <Text>It should go to tabs</Text>
            <Text>It is poosible when i can change stack navigation history</Text></>
    )

}

// function HandleBackScreen4 (params) {
//     const navigation = useNavigation();
//     navigation.navigate('Drawer1');
// }
const HandleBackScreen4 = () => {
    const navigation = useNavigation();
    navigation.navigate('Drawer1');
    return (<></>)
}

const Tab = createBottomTabNavigator();
const TabsLayout = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator name='Tabs Parent' options={{ headerStyle: { backgroundColor: '#f4511e', } }}>
            <Tab.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
            <Tab.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

function Drawer1() {
    return (
        <Drawer.Navigator id='Drawer1'>
            <Drawer.Screen name="Draw Screen2" component={TabsLayout} />
            <Drawer.Screen name="Draw Screen4" component={HandleScreen4} />
            <Drawer.Screen name="Log Out" component={HandleLogOut} />
        </Drawer.Navigator>
    );
}

function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator id='MainStack1'>
                <Stack.Screen name='Screen1' component={Screen1} />
                <Stack.Screen name='Drawer1' component={Drawer1} options={{ title: 'Drawer header (will hide this)', headerShown: false }} />
                <Stack.Screen name='Screen4' component={Screen4}
                    options={{ title:'In Screen 4 hurray',
                        headerStyle: { backgroundColor: '#f9997c' },
                        headerLeft: HandleBackScreen4,
                    }} />

            </Stack.Navigator>

        </NavigationContainer>

    )
};

export default App;