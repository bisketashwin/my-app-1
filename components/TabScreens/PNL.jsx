import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const PNL = () => {
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>PNL</Text>
    </View>
  )
}

export default PNL

const styles = StyleSheet.create({})