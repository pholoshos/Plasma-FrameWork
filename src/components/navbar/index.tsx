import React from "react"
import { View ,Text} from "react-native"

interface IProps {
    children: string;
    tintColor?: string | undefined;
}
export  const Navbar = (props : IProps)=>{
    return <View>
        <Text>NavBar</Text>
    </View>
} 