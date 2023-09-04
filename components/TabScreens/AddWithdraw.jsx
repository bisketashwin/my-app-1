import { DrawerActions } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import {SearchUI,ProfileBtn} from '../commonUIs/CommonUIs'


const AddWithdraw = ({ navigation }) => {
  return (

    <View style={{flex:1,backgroundColor:'#97ce4f'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start",margin:10,columnGap:10 }}>
        <ProfileBtn navigation={navigation}/>
        <SearchUI/>
      </View>
      
    </View>
  )
}

export default AddWithdraw
