import React from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"
import { IButton } from "../../modal/button"
import { theme } from "../../values"

export const Button = (props: IButton) => {
    return <Pressable onPress={(event) => props.onClick(event)} style={{ ...style.button, backgroundColor: props.color ? props.color : theme.primaryColor }}>
        <Text style={{color:'white'}} >{props.label}</Text>
    </Pressable>
}

export const style = StyleSheet.create({
    button: {
        borderRadius: 8,
        width: '98%',
        padding: 4,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,

    }
});
