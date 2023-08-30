import { Button, StyleSheet, Text, View ,Clickable} from 'react-native'
import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'

const LogIn = () => {
const navigation = useNavigation()

    const HandleLogIn = ()=>{
      navigation.navigate('TabsLayout')
    }
    const HandleModal = ()=>{
      navigation.navigate('MyModal')
    }
  return (
    <View>
      <Text>LogIn</Text>
      <Button title='Log In' onPress={HandleLogIn}/>
      <Button title='Launch My Modal' onPress={HandleModal}/>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({})