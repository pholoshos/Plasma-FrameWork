import React from "react"
import { View,Text ,StyleSheet} from "react-native"
import { ICard } from "../../modal"
import { theme } from "../../values"

export  const Card = (props:ICard)=>{
    return <View style={style.Card}>
        <View style={style.content}>
            <Text style={style.title}>{props.title}</Text>
            <Text style={style.description}>{props.description}</Text>
            
            {props.children}
        </View>
    </View>
} 

const style = StyleSheet.create({
    Card : {
        backgroundColor: theme.secondaryColor,
        justifyContent : 'center',
        padding: 20,
        borderRadius : 8,
        margin : 10,
    },
    title : {
        fontWeight : 'bold',
        marginBottom: 20,
        fontSize : 20
    },
    content : {
        flexDirection : 'column'
    },
    description : {
        marginBottom : 10
    }
})