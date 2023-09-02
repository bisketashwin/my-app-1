import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Feed = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{"route.name " + route.name} </Text>
            <Text>{"  route.key " + route.key}</Text>
            <Text> </Text>
            <Button title="Go to MyDrawer" onPress={() => navigation.navigate('MyDrawer')} />
            <Text> </Text>
            <Button
                title="Go to MyDrawer > Profile"
                onPress={() => navigation.navigate('MyDrawer', { screen: 'Profile' })}
            />
        </View>
    );
}

export default Feed

const styles = StyleSheet.create({})


// function Feed({ navigation, route }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>{"route.name " + route.name} </Text>
//             <Text>{"  route.key " + route.key}</Text>
//             <Text> </Text>
//             <Button title="Go to MyDrawer" onPress={() => navigation.navigate('MyDrawer')} />
//             <Text> </Text>
//             <Button
//                 title="Go to MyDrawer > Profile"
//                 onPress={() => navigation.navigate('MyDrawer', { screen: 'Profile' })}
//             />
//         </View>
//     );
// }
