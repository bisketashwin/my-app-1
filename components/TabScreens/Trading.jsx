import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers, Texts } from '../Styles'

const Trading = ({ navigation }) => {
  // control parent headder title
 React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      navigation.getParent().setOptions({ headerTitle: 'Commodity Trading' })
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  ///////
  return (
    <View style={containers({ backgroundColor: '#97ce4f' }).con1}>
      <Text style={Texts.M1}>Trading</Text>
    </View>
  )
}

export default Trading

const styles = StyleSheet.create({})