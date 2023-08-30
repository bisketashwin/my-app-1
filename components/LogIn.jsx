import { Button, StyleSheet, Text, View ,Clickable} from 'react-native'
import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'
import { containersStyles } from './styles/CommonStyles'

const LogIn = () => {
const navigation = useNavigation()

    const HandleLogIn = ()=>{
      navigation.navigate('TabsDraw')
    }
    const HandleModal = ()=>{
      navigation.navigate('MyModal')
    }
  return (
    <View style={containersStyles.con1}>
      <Text style={containersStyles.m1}>LogIn</Text>
      <Text> </Text>
      <Button title='Log In' onPress={HandleLogIn}/>
      <Text> </Text>
      <Button title='Launch My Modal' onPress={HandleModal} color='#76a0ac'/>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({})