import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const LogIn = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Custom Draw & Custom Tabs</Text>
            <Button title="Log In" onPress={() => navigation.navigate('MyDrawer')} />
        </View>
    );
}

export default LogIn

const styles = StyleSheet.create({})

