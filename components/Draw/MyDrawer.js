import * as React from 'react';
import { TouchableOpacity,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { IconButtons } from '../Styles';
import CustomDrawer from './CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsLayout from '../CustomTab/TabsLayout';

const Drawer = createDrawerNavigator();

export function EmptyScreen() {
    return <View />;
}
//// this module was designed follwing this tutrial https://www.youtube.com/watch?v=l8nY4Alk70Q&t=71s
export function MyDrawer() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerType: 'front',
                drawerActiveBackgroundColor: '#f7a1a1',
                drawerActiveTintColor: '#1e638e',
                drawerInactiveTintColor: '#3b5660',
                drawerLabelStyle: { marginLeft: -20, }
            }}
            options={{ headerShown: false, }}
        >
            <Drawer.Screen name="Home" component={TabsLayout}
                options={{
                    headerShown: false, // NOTE: this is hiding the headder in tabs view aim is to have a custom header or no header
                    drawerIcon: ({ color }) => (<Icon name='home' size={20} type='font-awesome-5' color={color} />),
                }} />
            <Drawer.Screen name="Profile" component={EmptyScreen}
                options={{
                    drawerIcon: ({ color }) => (<Icon name='user-alt' size={20} type='font-awesome-5' color={color} />),
                    headerLeft: () => (
                        <TouchableOpacity style={IconButtons.S1}
                            onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })}>
                            <Icon name='arrow-back' type='Ionicons' color='#00' />
                        </TouchableOpacity>)
                }} />
            <Drawer.Screen name="Settings" component={EmptyScreen}
                options={{
                    drawerIcon: ({ color }) => (<Icon name='gear' size={25} type='font-awesome' color={color} />),
                    headerLeft: () => (
                        <TouchableOpacity style={IconButtons.S1}
                            onPress={() => navigation.navigate('MyDrawer', { screen: 'Home' })}>
                            <Icon name='arrow-back' type='Ionicons' color='#00' />
                        </TouchableOpacity>)
                }} />
        </Drawer.Navigator>
    );
}
