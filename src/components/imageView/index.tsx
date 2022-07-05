import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { appStyle } from "../../values";

interface IImageView {
    url: string;
    mode: 'small' | 'medium' | 'large';
    description?: string;
    title?: string;

}

export const ImageView = ({ url, mode, title, description}: IImageView) => {
    return <View style={
        style.container
    }>
        <Image style={
            mode == 'small' ? style.smallImage : mode == 'medium' ? style.mediumlImage : mode == "large" ? style.largeImage : style.smallImage
        }
            source={
                { uri: url }
            } />
        <Text style={appStyle.title}>{title}</Text>
        <Text>{description}</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        margin: 10,
     
    },

    smallImage: {
        height: 100,
        width: 100
    },
    mediumlImage: {
        height: 200,
        width: 200
    },
    largeImage: {
        height: 300,
        width: 300
    },
})
