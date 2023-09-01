import { StyleSheet, Text, View ,Button} from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import { containers, Texts } from '../Styles'

const AddWithdraw = ({ navigation }) => {
  // control parent headder title using 'focus' us important here if not it would get called only on first render
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused Call any action
      navigation.getParent().setOptions({ headerTitle: 'Add Withdraw Commodity'})
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
///////////////////////
  return (
    <View style={containers({ backgroundColor: '#97ce4f' }).con1}>
      <Button title="open draw" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <Text style={Texts.M1}>AddWithdraw</Text>
    </View>
  )
}

export default AddWithdraw

const styles = StyleSheet.create({})