import { StyleSheet } from "react-native"

const containersStyles = StyleSheet.create({
    con1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#a9cac8',
    },
    pop1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#a9cac8',
        margine:100,
    },
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

const TesxtStyles = StyleSheet.create({
    M1: {
        fontSize:32,
    },
    M2: {
        fontSize:22,
    }
})


export { containersStyles,buttonStyles }