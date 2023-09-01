import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containers,Texts } from '../Styles'

const PNL = ({ navigation }) => {
    // control parent headder title using 'focus' us important here if not it would get called only on first render
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // The screen is focused Call any action
        navigation.getParent().setOptions({ headerTitle: 'Profit and Loss Analysis' })
      });
      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe;
    }, [navigation]);
  ///////////////////////
  return (
    <View style={containers({backgroundColor:'#97ce4f'}).con1}>
      <Text style={Texts.M1}>PNL</Text>
    </View>
  )
}

export default PNL

const styles = StyleSheet.create({})