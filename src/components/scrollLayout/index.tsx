import React from "react"
import { ScrollView, View,StyleSheet } from "react-native"
interface IProps {
    children? : any;
}
export  const ScrollLayout = (props : IProps)=>{
    return <ScrollView style={style.content}>
        {props.children}
    </ScrollView>   
}

const style = StyleSheet.create({
    content : {
        margin : 8
    },

});