import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';

import AddWithdraw from '../TabScreens/AddWithdraw';
import Receitps from '../TabScreens/Receitps';
import PNL from '../TabScreens/PNL';
import Trading from '../TabScreens/Trading';
import Lending from '../TabScreens/Lending';

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

export default TabsLayout

const styles = StyleSheet.create({})


// export const TabsLayout = () => {
//     return (
//         <Tab.Navigator name='Tabs Parent'>
//             <Tab.Screen name="Tab1" component={AddWithdraw}
//                 options={{
//                     title: 'Add Withdraw', headerShown: false,
//                     tabBarIcon: ({ color, size }) => (<Icon name="shipping-fast" type='font-awesome-5' color={color} size={size}
//                     />)
//                 }} />
//             <Tab.Screen name="Tab2" component={Receitps}
//                 options={{
//                     title: 'Receipts', headerShown: false,
//                     tabBarIcon: ({ color, size }) => (<Icon name="archive" type='entypo' color={color} size={size} />)
//                 }} />
//             <Tab.Screen name="Tab3" component={Trading}
//                 options={{
//                     title: 'Trading', headerShown: false,
//                     tabBarIcon: ({ color, size }) => (<Icon name="clipboard-list" type='font-awesome-5' color={color} size={size} />)
//                 }} />
//             <Tab.Screen name="Tab4" component={Lending}
//                 options={{
//                     title: 'Lending', headerShown: false,
//                     tabBarIcon: ({ color, size }) => (<Icon name="hand-coin" type='material-community' color={color} size={size} />)
//                 }} />
//             <Tab.Screen name="Tab5" component={PNL}
//                 options={{
//                     title: 'PNL', headerShown: false,
//                     tabBarIcon: ({ color, size }) => (<Icon name="chart-line" type='font-awesome-5' color={color} size={size} />)
//                 }} />
//         </Tab.Navigator>
//     )
// }