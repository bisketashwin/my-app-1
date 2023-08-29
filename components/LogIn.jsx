import { Button, StyleSheet, Text, View ,Clickable} from 'react-native'
import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'

const LogIn = () => {
const Navigator = useNavigation()

    const HandleLogIn = ()=>{
      Navigator.navigate('TabsLayout')
    }
    const HandleModal = ()=>{
      Navigator.navigate('MyModal')
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