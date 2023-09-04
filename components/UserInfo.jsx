import React, { useState } from "react";
import { Text, TextInput, View, FlatList } from "react-native";


// 
const App = () => {
  const [name, setName] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const nameProps ={setIsFocused:setIsNameFocused,isFocused:isNameFocused,setValue:setName,label:'Your name',placeholder:'type your Name here'}

  const [surname, setSurname] = useState("");
  const [isSurnameFocused, setIsSurnameFocused] = useState(false);
  const surnameProps ={setIsFocused:setIsSurnameFocused,isFocused:isSurnameFocused,setValue:setSurname,label:'Your Surname',placeholder:'type your surname here'}
  console.log(isNameFocused,isSurnameFocused)
  
  return (
    <View style={{flex:1, columnGap:20, padding:20}}>
    <CustomInput {...nameProps}/>
    <CustomInput {...surnameProps}/>
    </View>
  );
};

export default App;




const  CustomInput=({isFocused, setIsFocused, setValue,label,placeholder})=> {
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