import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab = createBottomTabNavigator();
const TabsLayout = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator options ={{headerStyle: { backgroundColor: '#f4511e',}}}>
      <Tab.Screen name="Tab1" component={Tab1} 
      options = {{
        headerStyle: { backgroundColor: '#c8f58a',},
        headerLeft: (props) => (
          <Button
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            title="Menu"
            color="#242424"
          />
        ),
      }}/>
      <Tab.Screen name="Tab2" component={Tab2} 
      options = {{headerStyle: { backgroundColor: '#c8f58a',},}}/>
    </Tab.Navigator>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})