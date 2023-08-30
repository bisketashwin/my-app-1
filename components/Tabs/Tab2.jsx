import { Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { buttonStyles, containersStyles } from '../styles/CommonStyles'



const Tab2 = () => {
  const Navigator = useNavigation()

  const HandleLogIn = () => {
    Navigator.navigate('AddWH1')
  }

  return (
    <View style={containersStyles.con1}>
      <Text>Tab2</Text>
      <TouchableOpacity title='Add Items' onPress={HandleLogIn} style={buttonStyles.button1}>

        <Text style={buttonStyles.button1Text}>Add Items</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tab2

