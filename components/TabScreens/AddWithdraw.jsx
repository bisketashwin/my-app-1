import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const AddWithdraw = () => {
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>AddWithdraw</Text>
    </View>
  )
}

export default AddWithdraw

const styles = StyleSheet.create({})