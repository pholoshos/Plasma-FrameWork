import React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Pressable } from "react-native";


export interface ILinks {
    name: string;
    icon: any;
    onPress?: () => void;
}

interface IProps {
    links : ILinks[]
}

export const BottomNavBar = (props:IProps) => {

    return <View style={style.container}>
        {props.links?.map(({ name, icon ,onPress}) =>
            <Pressable onPress={onPress}  style={style.links} key={name}>
                <View>
                    <Text style={style.linkText}>{name}</Text>
                </View>
            </Pressable>
        )}
    </View>
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'orange',
        flexDirection: 'row'
    },
    links: {
        marginHorizontal: 8,
        flex: 1,
        alignItems: 'center'
    },
    linkText : {
        color : 'white'
    }
})