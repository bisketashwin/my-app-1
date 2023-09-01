import { StyleSheet, Text, View ,Button} from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { containers, Texts } from '../Styles'

const AddWithdraw = ({ navigation }) => {
  // control parent headder title
  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Add Withdraw Commodity' })
  }, [])
  return (
    <View style={containers({ backgroundColor: '#97ce4f' }).con1}>
      <Button title="open draw" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <Text style={Texts.M1}>AddWithdraw</Text>
    </View>
  )
}

export default AddWithdraw

const styles = StyleSheet.create({})