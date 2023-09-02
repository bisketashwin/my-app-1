
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ImageBackground, StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Touchable, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/base';
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            {/* Why not add a view on top? I will expore this more later */}
            {/* <View style={{flex:1, height:100, alignContent:'center', justifyContent:"center", backgroundColor:'#000000',}}><Text style={{color:'#ffffff'}}>Other Menu Items</Text></View> */}
            <DrawerContentScrollView {...props}>
                <View style={{ padding: 20, backgroundColor: '#d37171' }}>
                    {/* profile image */}
                    <Icon reverse name='ios-american-football' type='ionicon' size={30} color='#8cbce4' raised={true}
                        onPress={() => Alert.alert('Profile', 'will soon add the profile image edit')} />

                    {/* Profile Name */}
                    {/* alignSelf:'baseline' is critical for wrapiing the content if not it would fill parent widht */}
                    <TouchableHighlight underlayColor="#dddddd31" style={{ alignSelf: 'baseline' }}
                        onPress={() => Alert.alert('Profle', 'will soon add the user name edit')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ marginRight: 10 }}>Other Menu Items</Text>
                            <Icon name='user-edit' type='font-awesome-5' size={15} />
                        </View>
                    </TouchableHighlight>


                </View>
                {/* Rest of the Menu properties are set in drwer compnenet */}
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#718169' }}>
                <TouchableHighlight underlayColor="#dddddd31" style={{ alignSelf: 'baseline' }}
                    // i used console.log(props) from the log i found out what all are being parsed bay taking and pasting the output in a new json file and Shf+Alt+F to format and figured out it is sending naivagtion data
                    onPress={() => props.navigation.getParent().goBack()}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon name='sign-out-alt' size={20} type='font-awesome-5' color={props.color} />
                        <Text style={{ marginLeft: 10, color: '#718169', fontWeight: 'bold' }}>Log Out</Text>
                    </View>

                </TouchableHighlight>
            </View>
            <View style={{ height: 50 }}></View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})