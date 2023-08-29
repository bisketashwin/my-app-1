import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containersStyles } from './styles/CommonStyles'
const MyModal = () => {
  return (
    <View style={containersStyles.con1}>
        <View style={containersStyles.pop1}><Text>MyModal</Text></View>
      
    </View>
  )
}

export default MyModal

const styles = StyleSheet.create({})