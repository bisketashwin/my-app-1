import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LogIn = () => {
const Navigator = useNavigation()

    const HandleLogIn = ()=>{
      Navigator.navigate('TabsLayout')
    }
  return (
    <View>
      <Text>LogIn</Text>
      <Button title='Log In' onPress={HandleLogIn}/>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({})