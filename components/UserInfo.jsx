import React, { useState } from "react";
import { Text, TextInput, View, FlatList } from "react-native";


// 
const App = () => {

  //Each filed would have Label, defult value, value, isFocused, set focus on click
  const [data, SetData] = useState([
    {label:'Name', deafultValue:'Type your Name here', value:'',isFocused:false},
    {label:'Surname', deafultValue:'Type your Surname here', value:'',isFocused:false}
  ])
  
  return (
    <View style={{flex:1, columnGap:20, padding:20}}>
    {data.map(CustomInput)}
    </View>
  );
};

export default App;




const  CustomInput=(data)=> {
  const{label,deafultValue,value,isFocused} = {...data}
  console.log(label,deafultValue,value,isFocused)
  return (<View>
    <Text>{isFocused ? label: ''}</Text>
    <TextInput
      placeholder={isFocused ? '' : deafultValue}
      placeholderTextColor='#000000'
      //underlineColorAndroid=''TODO: this is creating a bright blue underline wen be is pink and blacik underline when bg is gray 
      style={{ borderWidth: 1, backgroundColor: isFocused ? '#ffa688' : '#b7b7b7', fontSize: isFocused ? 22 : 12 , paddingHorizontal:10}}
      onPressIn={(event) => {
        setIsFocused(true);
      } }
      onChangeText={(text) => { setValue(text); } } />
  </View>)
}