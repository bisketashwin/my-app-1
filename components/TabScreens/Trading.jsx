import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const Trading = () => {
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>Trading</Text>
    </View>
  )
}

export default Trading

const styles = StyleSheet.create({})