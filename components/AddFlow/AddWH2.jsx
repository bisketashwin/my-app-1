import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddWH2 = () => {
    const Navigator = useNavigation()

    const HandleLogIn = ()=>{
        Navigator.navigate('TabsLayout')
      }
  return (
    <View>
      <Text>AddWH2</Text>
      <Button title='Log In' onPress={HandleLogIn}/>
    </View>
  )
}

export default AddWH2

const styles = StyleSheet.create({})