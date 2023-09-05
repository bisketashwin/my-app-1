import { StyleSheet } from "react-native"

const containers = ({ backgroundColor }) => StyleSheet.create({
    con1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: backgroundColor,
    },
})

const buttons = StyleSheet.create({
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d9624',
        borderRadius: 5,
    },
    button1Text: {
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingHorizontal: 30,

    }
})

const Texts = StyleSheet.create({
    M1: {
        fontSize: 32,
    },
    M2: {
        fontSize: 22,
    }
})

const IconButtons = StyleSheet.create({
    S1: {
        width: 46,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    M2: {
        fontSize: 22,
    }
})


const Colors = StyleSheet.create({
    S1: {
        width: 46,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    M2: {
        fontSize: 22,
    }
})



export { containers, buttons, Texts, IconButtons }