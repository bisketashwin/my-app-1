import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const Receitps = () => {
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>Receitps</Text>
    </View>
  )
}

export default Receitps

const styles = StyleSheet.create({})