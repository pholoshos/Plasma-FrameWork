import React from "react"
import { View ,Text} from "react-native"
import { info } from "../../values";

interface IProps {
    children: string;
    tintColor?: string | undefined;
    
}
export  const Navbar = (props : IProps)=>{
    return <View>
        <Text>{info.name}</Text>
    </View>
} 