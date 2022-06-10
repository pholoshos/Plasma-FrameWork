import React from "react"
import { Pressable,Text, View } from "react-native"
import { IButton } from "../../modal/button"

export  const Button = (props : IButton)=>{
    return <Pressable>
        <Text>{props.label}</Text>
    </Pressable>
} 