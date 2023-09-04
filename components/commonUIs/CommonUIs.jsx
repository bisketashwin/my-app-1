import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import { DrawerActions } from '@react-navigation/native';

export const SearchUI = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignContent: 'flex-start',
                justifyContent: 'center',
                borderColor: '#000000',
                borderWidth: 1,

                borderCurve: 'circular',
                borderRadius: 25,
                paddingHorizontal: 20,
                paddingVertical: 6,
            }}
        ><Icon name='search' type='ionicons' size={24} />
            {/* <Text style={{fontSize:12,}}>Add Withdraw Commodity</Text> */}
            <TextInput placeholder='Search Add Withdraw Commodity' style={{ width: 200, color: '#262626' }}
            />
        </View>
    )
}

export const ProfileBtn = ({ navigation }) => {
    return(
        <TouchableHighlight underlayColor="#ffffff"
        style={{
            backgroundColor: '#000000',
            alignSelf: 'baseline',
            borderCurve: 'circular',
            borderRadius: 25,
            paddingHorizontal: 0,
            paddingVertical: 0,
            margine: 5,
        }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        {/* <Icon name='menu' type='entypo' size={32} color={'#ffffff'}/> */}
        <Icon name='user-circle-o' type='font-awesome' size={42} color={'#8a7569'} />
    </TouchableHighlight>
    )
}

export const  CustomInput=({isFocused, setIsFocused, setValue,label,placeholder})=> {
    return (<View>
      <Text>{isFocused ? label: ''}</Text>
      <TextInput
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor='#000000'
        //underlineColorAndroid=''TODO: this is creating a bright blue underline wen be is pink and blacik underline when bg is gray 
        style={{ borderWidth: 1, backgroundColor: isFocused ? '#ffa688' : '#b7b7b7', fontSize: isFocused ? 22 : 12 , paddingHorizontal:10}}
        onPressIn={(event) => {
          setIsFocused(true);
        } }
        onChangeText={(text) => { setValue(text); } } />
    </View>)
  }


const styles = StyleSheet.create({})