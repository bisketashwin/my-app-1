import { StyleSheet } from "react-native"

const containersStyles = StyleSheet.create({
    con1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#a9cac8',
    }
})

const buttonStyles = StyleSheet.create({
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#0d9624',
        borderRadius:5,
    },
    button1Text: {
        fontSize:24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingHorizontal:30,
        
    }
})


export { containersStyles,buttonStyles }