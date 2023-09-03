import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';

import{ AddWithdraw, Lending, PNL, Receitps, Trading } from '../TabScreens'


const Tab = createBottomTabNavigator();

//// TODO: crreate aniamted lotte icons for tabs https://www.youtube.com/watch?v=gPaBicMaib4&t=315s
const TabsLayout = () => {
    return (
        <Tab.Navigator name='Tabs Parent'
            // tabBarOptions is depricate so use screenOptions and tabBarShowLabel istead if just showLabel & tabBarStyle insted of just style
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.TabBarStyle,
                    ...styles.shadow,
                }
            }}>
            <Tab.Screen name="Tab1" component={AddWithdraw}
                options={{headerShown: false,
                    tabBarIcon: ({focused, color, size }) => (
                        <View style={{...styles.tavBarViewStle}}>
                            <Icon name="shipping-fast" type='font-awesome-5' color={color} size={size} />
                            <Text style={{color:color,fontSize:10,paddingTop:5,}}>Add Withdraw</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Tab2" component={Receitps}
                options={{ headerShown: false,
                        tabBarIcon: ({focused, color, size }) => (
                            <View style={{...styles.tavBarViewStle}}>
                                <Icon name="archive" type='entypo' color={color} size={size} />
                                <Text style={{color:color,fontSize:10,paddingTop:5,}}>Reciepts</Text>
                            </View>
                        )
                }} />
            <Tab.Screen name="Tab3" component={Trading}
                options={{headerShown: false,
                    tabBarIcon: ({focused, color, size }) => (
                        <View style={{...styles.tavBarViewStle}}>
                            <Icon name="clipboard-list" type='font-awesome-5' color={color} size={size} />
                            <Text style={{color:color,fontSize:10,paddingTop:5,}}>Trading</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Tab4" component={Lending}
                options={{
                    // title: 'Lending', 
                    headerShown: false,
                    tabBarIcon: ({focused, color, size }) => (
                        <View style={{...styles.tavBarViewStle}}>
                            <Icon name="hand-coin" type='material-community' color={color} size={size} />
                            <Text style={{color:color,fontSize:10,paddingTop:5,}}>Lending</Text>
                        </View>
                    )
                    // tabBarIcon: ({ color, size }) => (<Icon name="hand-coin" type='material-community' color={color} size={size} />)
                }} />
            <Tab.Screen name="Tab5" component={PNL}
                options={{
                    title: 'PNL', headerShown: false,
                    tabBarIcon: ({focused, color, size }) => (
                        <View style={{...styles.tavBarViewStle}}>
                            <Icon name="chart-line" type='font-awesome-5' color={color} size={size} />
                            <Text style={{color:color,fontSize:10,paddingTop:5,}}>PNL</Text>
                        </View>
                    )
                    // tabBarIcon: ({ color, size }) => (<Icon name="chart-line" type='font-awesome-5' color={color} size={size} />)
                }} />

        </Tab.Navigator>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    TabBarStyle: {
        position: 'absolute',
        bottom: 15,
        marginHorizontal:4,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderCurve: 'circular',
        // borderTopEndRadius:10,
        borderRadius: 10,
        height: 60,
        paddingLeft:10,


    },

    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadious: 3.5,
        elevation: 5,
    },

    tavBarViewStle: {
        flex:1,
        alignContent: "center",
        justifyContent: "center",
    }
})