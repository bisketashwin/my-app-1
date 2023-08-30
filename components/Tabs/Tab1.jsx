import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { containersStyles,buttonStyles } from '../styles/CommonStyles'
import { useNavigation } from '@react-navigation/native'

const Tab1 = () => {
  const Navigator = useNavigation()

  const HandleLogIn = () => {
    Navigator.navigate('AddWH1')
  }
  return (
    <View style={containersStyles.con1}>
      <TouchableOpacity title='Add Items' onPress={HandleLogIn} style={buttonStyles.button1}>

        <Text style={buttonStyles.button1Text}>Add Items</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tab1

const styles = StyleSheet.create({})