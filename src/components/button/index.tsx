import React from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"
import { IButton } from "../../modal/button"
import { theme } from "../../values"

export const Button = (props: IButton) => {
    return <Pressable onPress={(event) => props.onClick(event)} style={style.button}>
        <Text >{props.label}</Text>
    </Pressable>
}

export const style = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: theme.primaryColor,
        width: 100,
        padding: 4,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,

    }
});
