import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
// this will hide alert messages in expo go
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import { containers, buttons, IconButtons, Texts } from './components/Styles';

import AddWithdraw from './components/TabScreens/AddWithdraw';
import Receitps from './components/TabScreens/Receitps';
import Trading from './components/TabScreens/Trading';
import Lending from './components/TabScreens/Lending';
import PNL from './components/TabScreens/PNL';

function EmptyScreen() {
    return <View />;
}

function Feed({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{"route.name " + route.name} </Text>
            <Text>{"  route.key " + route.key}</Text>
            <Text> </Text>
            <Button title="Go to MyDrawer" onPress={() => navigation.navigate('MyDrawer')} />
            <Text> </Text>
            <Button
                title="Go to MyDrawer > Profile"
                onPress={() => navigation.navigate('MyDrawer', { screen: 'Profile' })}
            />
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
            <Tab.Screen name="Tab1" component={AddWithdraw}
                options={{
                    title: 'Add Withdraw', headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="shipping-fast" type='font-awesome-5' color={color} size={size}
                    />)
                }} />
            <Tab.Screen name="Tab2" component={Receitps}
                options={{
                    title: 'Receipts', headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="archive" type='entypo' color={color} size={size} />)
                }} />
            <Tab.Screen name="Tab3" component={Trading}
                options={{
                    title: 'Trading', headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="clipboard-list" type='font-awesome-5' color={color} size={size} />)
                }} />
            <Tab.Screen name="Tab4" component={Lending}
                options={{
                    title: 'Lending', headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="hand-coin" type='material-community' color={color} size={size} />)
                }} />
            <Tab.Screen name="Tab5" component={PNL}
                options={{
                    title: 'PNL', headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="chart-line" type='font-awesome-5' color={color} size={size} />)
                }} />
        </Tab.Navigator>
    )
}


function MyDrawer() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator options={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={TabsLayout}/>
            <Drawer.Screen name="Profile" component={EmptyScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={IconButtons.S1}
                            onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })}>
                            <Icon name='arrow-back' type='Ionicons' color='#00' />
                        </TouchableOpacity>)
                }} />
            <Drawer.Screen name="Settings" component={EmptyScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={IconButtons.S1}
                            onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })}>
                            <Icon name='arrow-back' type='Ionicons' color='#00' />
                        </TouchableOpacity>)
                }} />

            <Drawer.Screen name="Log Out" component={({ navigation }) => navigation.getParent().goBack()} />
        </Drawer.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Log In" component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
                <Stack.Screen name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;