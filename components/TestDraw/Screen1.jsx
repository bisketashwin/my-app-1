import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link, useNavigation } from '@react-navigation/native'
import {containers,buttons,Texts} from '../Styles'


const Screen1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      setCount(1);
    }
  }, [count]);

    const navigation = useNavigation()

    const HandleOnPress = ()=>{
      navigation.navigate('Drawer1')
    }
  return (
    <View style={containers.con1}>
      <Text style={Texts.M1}>Screen1 Count: {count}</Text>
      <Button title='Log In' onPress={HandleOnPress}/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})