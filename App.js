import * as React from 'react';
import { Button, View, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';

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

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text> </Text>
            <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
            <Text> </Text>
            <Button
                title="Go to Profile"
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
            <Tab.Screen name="Screen2" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Screen3" component={EmptyScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const HandleLogOut = ({ navigation }) => {

    navigation.getParent().goBack()
    return (
        <></>
    )
}

function MyDrawer() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator options={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={TabsLayout} />
            <Drawer.Screen name="Profile" component={EmptyScreen}
                options={{
                    headerLeft: () => (
                        // <TouchableHighlight  onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })}>
                        //     {/* <Icon name='swipe_right_alt' type='material-icons' color='#517fa4' /> */}
                        //     {/* <Icon name='arrow-back' type='materialicons' color='#517fa4' /> */}
                            
                        // </TouchableHighlight>
                        <Icon name='arrow-back' type='Ionicons' color='#00'  onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })} />
                    )
                }} />
            <Drawer.Screen name="Settings" component={EmptyScreen}
                options={{
                    headerLeft: () => (
                        <Icon name='arrow-back' type='Ionicons' color='#00'  onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })} />)
                }} />

            <Drawer.Screen name="Log Out" component={({ navigation }) => navigation.getParent().goBack()} />
            {/* <Drawer.Screen name="Log Out" component={HandleLogOut}/> */}
            {/* <Drawer.Screen name="Feed" component={({navigation}) => navigation.getParent().navigate('Feed')} /> */}
            {/* <Drawer.Screen name="Feed" component={Feed} /> */}
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