import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function EmptyScreen() {
  return <View />;
}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to MyDrawer" onPress={() => navigation.navigate('MyDrawer')} />
      <Button
        title="Go to MyDrawer, Profile"
        onPress={() => navigation.navigate('MyDrawer', { screen: 'Profile' })}
      />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

function LogIn({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Log In</Text>
        <Button title="Log In" onPress={() => navigation.navigate('MyDrawer')} />
      </View>
    );
  }

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsLayout = () => {
    return (
        <Tab.Navigator name='Tabs Parent'>
            <Tab.Screen name="Screen2" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Screen3" component={EmptyScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

function MyDrawer() {
  return (
    <Drawer.Navigator options={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={TabsLayout} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Stack.Screen name="Settings" component={EmptyScreen} />
      {/* <Stack.Screen name="Feed" component={({navigation}) => navigation.getParent().navigate('Feed')} /> */}
      {/* <Stack.Screen name="Feed" component={Feed} /> */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }}/>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;