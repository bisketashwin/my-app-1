import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { containers, Texts } from '../Styles'

const AddWithdraw = ({ navigation }) => {
  // control parent headder title
  useEffect(() => {
    navigation.getParent().setOptions({ headerTitle: 'Add Withdraw Commodity' })
  }, [])
  return (
    <View style={containers({ backgroundColor: '#97ce4f' }).con1}>
      <Text style={Texts.M1}>AddWithdraw</Text>
    </View>
  )
}

export default AddWithdraw

const styles = StyleSheet.create({})