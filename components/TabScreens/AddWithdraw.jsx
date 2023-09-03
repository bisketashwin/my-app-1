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



//  <View style={{flex:1,backgroundColor:'#97ce4f'}}>
//       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start",margin:10,columnGap:10 }}>
//         <TouchableHighlight underlayColor="#ffffff" 
//         style={{ 
//           backgroundColor:'#000000',
//           alignSelf: 'baseline',
//           borderCurve: 'circular',
//           borderRadius:25, 
//           paddingHorizontal:0,
//           paddingVertical:0, 
//           margine:5,
//         }}
//          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//           {/* <Icon name='menu' type='entypo' size={32} color={'#ffffff'}/> */}
//           <Icon name='user-circle-o' type='font-awesome' size={42} color={'#8a7569'}/>
//         </TouchableHighlight>
//         <View
//         style={{ 
//           flexDirection:'row',
//           alignContent:'flex-start',
//           justifyContent: 'center',
//           borderColor:'#000000', 
//           borderWidth:1, 
   
//           borderCurve: 'circular',
//           borderRadius:25,
//           paddingHorizontal:20,
//       paddingVertical:6,
//           }}
//         ><Icon name='search' type='ionicons' size={24} />
//         {/* <Text style={{fontSize:12,}}>Add Withdraw Commodity</Text> */}
//         <TextInput placeholder='Search Add Withdraw Commodity' style={{width:200}}
//         />
//         </View>
//       </View>
      
//     </View> 