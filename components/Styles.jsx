import { StyleSheet } from "react-native"
import { colors } from "./Constants"

// the backgroundColor if not found it breaks the styles sytem and anothing get aplied
const containers = ({ backgroundColor:any }) => StyleSheet.create({
    con1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: backgroundColor,
    },
    
})

const textInputStyle =({item})=>StyleSheet.create({
    style1:{
        borderWidth: 0,
        paddingVertical: 5,
        paddingLeft: item.focused ? 5 : 0,
        marginBottom: 10,
        backgroundColor: item.value ? 'yellow' : 'transparent',
        fontSize: 22,
        borderCurve: 'circular',
        borderRadius: 5,
        borderColor: '#b7b7b7',
      },
    
})

const modalStyle = StyleSheet.create({
    popUpBase: {

        backgroundColor: 'white',
        borderRadius: 5,
    },
    popUpContentBase: {
        padding: 25
    },
    popUpButtonsBase: {
        flexDirection: 'row',
        columnGap: 20,
        marginTop: 20
    },
    popUpHeader: {
        backgroundColor: colors.secondery.light,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    popUpHeaderText: { fontSize: 18 },
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

    },
    primary: {
        flex: 1,
        backgroundColor: colors.primary.pure,
        borderCurve: 'circular',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margine: 5,
    },
    primaryText: {
        fontSize: 18,
        color: colors.textColor.ctaPrimary,
        textAlign: 'center'
    },
    secondery: {
        flex: 1,
        backgroundColor: colors.secondery.light,
        borderCurve: 'circular',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margine: 5,
    },
    seconderyText: {
        fontSize: 18,
        color: colors.textColor.ctaSecondery,
        textAlign: 'center'
    },
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






export { modalStyle,containers,textInputStyle, buttons, Texts, IconButtons } 