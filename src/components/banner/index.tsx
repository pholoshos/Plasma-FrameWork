import React from "react"
import { View, Text, Image,StyleSheet, ImageBackground } from "react-native"
import { appStyle } from "../../values";

interface IBanner {
    title: string;
    description?: string;
    imageUrl?: string;
    background?: string;
    textColor? : string;
}
export const Banner = ({ imageUrl, title, description, background,textColor } : IBanner) => {
    return <View style={style.container}>
        <ImageBackground style={style.background} source={{uri:background}}></ImageBackground>
        <View>
            <Image style={style.icon} source={{ uri: imageUrl }}></Image>
        </View>
        <View>
            <Text style={{...appStyle.title,color:textColor}}>{title}</Text>
            <Text style={{color:textColor}}>{description}</Text>
        </View>
    </View>
} 

const style = StyleSheet.create({
    container : {
        padding : 10,
        borderRadius  : 4,
        flexDirection : 'row'
    
    
    },
    background : {
        position : 'absolute',
        height : '120%',
        width : '100%',
    },
    icon : {
        width : 45,
        height : 45,
        margin : 5,
    }
})