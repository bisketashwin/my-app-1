import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const Lending = () => {
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>Lending</Text>
    </View>
  )
}

export default Lending

const styles = StyleSheet.create({})